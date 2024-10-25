import { describe, it, expect, jest, beforeEach } from '@jest/globals';
import { Request, Response, NextFunction } from 'express';
import { CharacterRepository } from './character.repository';
import { Character } from './character.entity';
import { sanitizeCharacterInput, findAll, findOne, add, update, remove } from './character.controller';
import * as CharacterController from './character.controller';


//jest.spyOn('./character.controller', {spy: true}); // Mock para el controlador
jest.spyOn(CharacterController, 'findAll');
// Mock para Request y Response de Express
const mockRequest = () => {
  const req: Partial<Request> = {
    body: {},
    params: {}
  };
  return req as Request;
};

const mockResponse = () => {
  const res: Partial<Response> = {
    json: jest.fn() as jest.MockedFunction<Response['json']>,
    status: jest.fn().mockReturnThis() as jest.MockedFunction<Response['json']>,
    send: jest.fn().mockReturnThis() as jest.MockedFunction<Response['json']>,
  };
  return res as Response;
};
describe('sanitizeCharacterInput middleware', () => {
  let req: Partial<Request>;
  let res: Partial<Response>;
  let next: NextFunction;

  beforeEach(() => {
    // Mockea `req`, `res`, y `next`
    req = {
      body: {
        name: 'Luke Skywalker',
        characterClass: 'Jedi',
        level: 10,
        hp: 100,
        mana: 50,
        attack: 20,
        items: ['Lightsaber'],
        id: '1234',
      },
    };

    res = {};
    next = jest.fn(); // Mockea `next` para verificar si se llama correctamente
  });

  it('should sanitize the input correctly', () => {
    // Llama a la función middleware
    sanitizeCharacterInput(req as Request, res as Response, next);

    // Verifica que `req.body.sanitizedInput` tenga los datos correctos
    expect(req.body.sanitizedInput).toEqual({
      name: 'Luke Skywalker',
      characterClass: 'Jedi',
      level: 10,
      hp: 100,
      mana: 50,
      attack: 20,
      items: ['Lightsaber'],
      id: '1234',
    });

    // Verifica que `next` fue llamado
    expect(next).toHaveBeenCalled();
  });

  it('should remove undefined properties', () => {
    // Simula algunos valores undefined
    req.body = {
      name: 'Darth Vader',
      characterClass: undefined, // Este debería eliminarse
      level: 15,
      hp: 150,
      mana: 70,
      attack: 30,
      items: undefined, // Este debería eliminarse
      id: '5678',
    };

    // Llama a la función middleware
    sanitizeCharacterInput(req as Request, res as Response, next);

    // Verifica que las propiedades undefined hayan sido eliminadas
    expect(req.body.sanitizedInput).toEqual({
      name: 'Darth Vader',
      level: 15,
      hp: 150,
      mana: 70,
      attack: 30,
      id: '5678',
    });

    // Verifica que `next` fue llamado
    expect(next).toHaveBeenCalled();
  });
});

describe('CharacterController CRUD', () => {
  let repository: CharacterRepository;
  let req: Request;
  let res: Response;
  let next: NextFunction;

  beforeEach(() => {
    repository = new CharacterRepository();
    req = mockRequest();
    res = mockResponse();
    next = jest.fn();
    // Tipar el repositorio como un objeto mockeado de CharacterRepository
    repository = {
      findAll: jest.fn() as jest.Mock<() => Character[] | undefined>,
      findOne: jest.fn() as jest.Mock<(item: { id: string }) => Character | undefined>,
      add: jest.fn() as jest.Mock<(item: Character) => Character | undefined>,
      update: jest.fn() as jest.Mock<(item: Character) => Character | undefined>,
      delete: jest.fn() as jest.Mock<(item: { id: string }) => Character | undefined>,
    };
    // Mock de las funciones del repositorio
    //repository.findAll = jest.fn();
   // repository.findOne = jest.fn();
   // repository.add = jest.fn();
   // repository.update = jest.fn();
   // repository.delete = jest.fn();
  });

  it('should return all characters', () => {
    repository.findAll();

    findAll(req, res);

    expect(res.json).toHaveBeenCalledWith({
      "data": [
        {
          "name": "Darth Vader",
          "characterClass": "Sith",
          "level": 11,
          "hp": 101,
          "mana": 22,
          "attack": 11,
          "items": [
            "Lightsaber",
            "Death Star"
          ],
          "id": "1234"
        },
        {
          "name": "Yoda",
          "characterClass": "Jedi",
          "level": 12,
          "hp": 120,
          "mana": 25,
          "attack": 12,
          "items": [
            "Lightsaber",
            "Wisdom"
          ],
          "id": "9101"
        }
      ]
    });

    

  });

  it('should return a character by id', () => {
    req.params.id = '1234';
    repository.findOne({ id: '1234' });

    findOne(req, res);

    expect(res.json).toHaveBeenCalledWith({
          "data": {
            "name": "Darth Vader",
            "characterClass": "Sith",
            "level": 11,
            "hp": 101,
            "mana": 22,
            "attack": 11,
            "items": [
              "Lightsaber",
              "Death Star"
            ],
            "id": "1234"
          }
    });
  });

  it('should return 404 if character not found', () => {
    req.params.id = '0000';
    repository.findOne({ id: '0000'});

    findOne(req, res);

    expect(res.status).toHaveBeenCalledWith(404);
    expect(res.send).toHaveBeenCalledWith({ message: 'Character not found' });
  });

  it('should add a new character', () => {
    req.body.sanitizedInput = {
      name: 'Leia Organa',
      characterClass: 'Rebel Leader',
      level: 15,
      hp: 120,
      mana: 80,
      attack: 35,
      items: ['Blaster', 'Diplomacy'],
      id: '5678'
    };

   
    add(req, res);
    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.send).toHaveBeenCalledWith({
            message: "Character created",
            data: {
              name: "Leia Organa",
              characterClass: "Rebel Leader",
              level: 15,
              hp: 120,
              mana: 80,
              attack: 35,
              items: [
                "Blaster",
                "Diplomacy"
              ],
              id: "5678"
            }
          });
  });


  it('should update an existing character', () => {
    req.body.sanitizedInput = {
      name: 'Leia Organa',
      level: 20
    };
    req.params.id = '5678';

    repository.update(
      new Character('Leia Organa', 'Rebel Leader', 20, 120, 80, 35, ['Blaster', 'Diplomacy'], '5678')
    );

    update(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.send).toHaveBeenCalledWith({
      message: 'Character updated successfully',
      data: {
        name: 'Leia Organa',
        characterClass: 'Rebel Leader',
        level: 20,
        hp: 120,
        mana: 80,
        attack: 35,
        items: ['Blaster', 'Diplomacy'],
        id: '5678'
      }
    });
  });

  it('should return 404 when updating a non-existent character', () => {
    req.body.sanitizedInput = {
      name: 'Han Solo',
      level: 20
    };
    req.params.id = '9999';

    repository.update(new Character('Han Solo', 'Smuggler', 20, 100, 50, 30, ['Blaster'], '9999'));

    update(req, res);

    expect(res.status).toHaveBeenCalledWith(404);
    expect(res.send).toHaveBeenCalledWith({ message: 'Character not found' });
  });

  it('should delete a character by id', () => {
    req.params.id = '5678';

    repository.delete(
      new Character('Leia Organa', 'Rebel Leader', 20, 120, 80, 35, ['Blaster', 'Diplomacy'], '5678')
    );

    remove(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.send).toHaveBeenCalledWith({ message: 'Character deleted successfully' });
  });

  it('should return 404 when deleting a non-existent character', () => {
    req.params.id = '9999';

    repository.delete({ id: '9999' });

    remove(req, res);

    expect(res.status).toHaveBeenCalledWith(404);
    expect(res.send).toHaveBeenCalledWith({ message: 'Character not found' });
  });
});

