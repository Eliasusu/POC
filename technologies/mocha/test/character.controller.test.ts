import { assert, expect } from "chai";
import sinon from "sinon";
import {
  findOne,
  add,
  update,
  remove,
  findAll,
} from "../src/character/character.controller.js";
import { CharacterRepository } from "../src/character/character.repository.js";
import { Request, Response, NextFunction } from "express";
import { Character } from "../src/character/character.entity.js";

sinon.mock("./character.controller");

const mockRequest = () => {
  const req: Partial<Request> = {
    body: {},
    params: {},
  };
  return req as Request;
};

const mockResponse = () => {
  const res: Partial<Response> = {
    json: sinon.stub(),
    status: sinon.stub().returnsThis(),
    send: sinon.stub().returnsThis(),
  };
  return res as Response;
};

describe("CharacterController CRUD", function () {
  let repository: CharacterRepository;
  let req: Request;
  let res: Response;
  let next: NextFunction;

  beforeEach(function () {
    repository = new CharacterRepository();
    req = mockRequest();
    res = mockResponse();
    next = sinon.spy();

    sinon.stub(repository, "findAll");
    sinon.stub(repository, "findOne");
    sinon.stub(repository, "add");
    sinon.stub(repository, "update");
    sinon.stub(repository, "delete");
  });

  afterEach(function () {
    sinon.restore();
  });

  it("should return all characters", () => {
    repository.findAll();

    findAll(req, res);
    // @ts-ignore
    expect(res.json.firstCall.args[0]).to.deep.equal({
      data: [
        {
          name: "Darth Vader",
          characterClass: "Sith",
          level: 11,
          hp: 101,
          mana: 22,
          attack: 11,
          items: ["Lightsaber", "Death Star"],
          id: "1234",
        },
        {
          name: "Yoda",
          characterClass: "Jedi",
          level: 12,
          hp: 120,
          mana: 25,
          attack: 12,
          items: ["Lightsaber", "Wisdom"],
          id: "9101",
        },
      ],
    });
  });

  it("should return a character by id", function () {
    req.params.id = "1234";
    repository.findOne({ id: "1234" });

    findOne(req, res);

    // @ts-ignore
    sinon.assert.calledOnce(res.json);
    // @ts-ignore

    // en los res.json hay que cambiar el assert xq cambia como el res.send y res.json manejan la data

    expect(res.json.firstCall.args[0]).to.deep.equal({
      data: {
        name: "Darth Vader",
        characterClass: "Sith",
        level: 11,
        hp: 101,
        mana: 22,
        attack: 11,
        items: ["Lightsaber", "Death Star"],
        id: "1234",
      },
    });
  });

  it("should return 404 if character not found", function () {
    req.params.id = "0000";
    repository.findOne({ id: "0000" });

    findOne(req, res);

    // @ts-ignore
    sinon.assert.calledOnce(res.status);
    // @ts-ignore
    sinon.assert.calledWith(res.status, 404);
    // @ts-ignore
    sinon.assert.calledOnce(res.send);
    // @ts-ignore
    sinon.assert.calledWith(res.send, { message: "Character not found" });
  });

  it("should add a new character", function () {
    req.body.sanitizedInput = {
      name: "Leia Organa",
      characterClass: "Rebel Leader",
      level: 15,
      hp: 120,
      mana: 80,
      attack: 35,
      items: ["Blaster", "Diplomacy"],
      id: "5678",
    };

    add(req, res);
    // @ts-ignore
    sinon.assert.calledOnce(res.status);
    // @ts-ignore
    sinon.assert.calledWith(res.status, 201);
    // @ts-ignore
    sinon.assert.calledOnce(res.send);
    // @ts-ignore
    sinon.assert.calledWith(res.send, {
      message: "Character created",
      data: {
        name: "Leia Organa",
        characterClass: "Rebel Leader",
        level: 15,
        hp: 120,
        mana: 80,
        attack: 35,
        items: ["Blaster", "Diplomacy"],
        id: "5678",
      },
    });
  });

  it("should update an existing character", function () {
    req.body.sanitizedInput = {
      name: "Leia Organa",
      level: 20,
    };
    req.params.id = "5678";

    //@ts-ignore
    repository.update.returns(
      new Character(
        "Leia Organa",
        "Rebel Leader",
        20,
        120,
        80,
        35,
        ["Blaster", "Diplomacy"],
        "5678"
      )
    );

    update(req, res);

    // @ts-ignore
    sinon.assert.calledOnce(res.status);
    // @ts-ignore
    sinon.assert.calledWith(res.status, 200);
    // @ts-ignore
    sinon.assert.calledOnce(res.send);
    // @ts-ignore
    sinon.assert.calledWith(res.send, {
      message: "Character updated successfully",
      data: {
        name: "Leia Organa",
        characterClass: "Rebel Leader",
        level: 20,
        hp: 120,
        mana: 80,
        attack: 35,
        items: ["Blaster", "Diplomacy"],
        id: "5678",
      },
    });
  });

  it("should return 404 when updating a non-existent character", function () {
    req.body.sanitizedInput = {
      name: "Han Solo",
      level: 20,
    };
    req.params.id = "9999";

    update(req, res);

    // @ts-ignore
    sinon.assert.calledOnce(res.status);
    // @ts-ignore
    sinon.assert.calledWith(res.status, 404);
    // @ts-ignore
    sinon.assert.calledOnce(res.send);
    // @ts-ignore
    sinon.assert.calledWith(res.send, { message: "Character not found" });
  });

  it("should delete a character by id", function () {
    req.params.id = "5678";
    // @ts-ignore
    repository.delete.returns(
      new Character(
        "Leia Organa",
        "Rebel Leader",
        20,
        120,
        80,
        35,
        ["Blaster", "Diplomacy"],
        "5678"
      )
    );

    remove(req, res);
    // @ts-ignore
    sinon.assert.calledOnce(res.status);
    // @ts-ignore
    sinon.assert.calledWith(res.status, 200);
    // @ts-ignore
    sinon.assert.calledOnce(res.send);
    // @ts-ignore
    sinon.assert.calledWith(res.send, {
      message: "Character deleted successfully",
    });
  });

  it("should return 404 when deleting a non-existent character", function () {
    req.params.id = "9999";

    remove(req, res);
    // @ts-ignore
    sinon.assert.calledOnce(res.status);
    // @ts-ignore
    sinon.assert.calledWith(res.status, 404);
    // @ts-ignore
    sinon.assert.calledOnce(res.send);
    // @ts-ignore
    sinon.assert.calledWith(res.send, { message: "Character not found" });
  });
});
