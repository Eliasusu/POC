import { Request, Response, NextFunction } from 'express';
import { sanitizeCharacterInput, findAll, findOne, add, update, remove } from './character.controller';
import { CharacterRepository } from './character.repository';
import { Character } from './character.entity';

// Mockear el repositorio para evitar que use una implementación real
jest.mock('./character.repository');

// Crear mocks para `req`, `res` y `next`
const mockRequest = (body = {}, params = {}) => {
  return {
    body,
    params
  } as Partial<Request>;
};

const mockResponse = () => {
  const res: Partial<Response> = {};
  res.status = jest.fn().mockReturnValue(res);
  res.json = jest.fn().mockReturnValue(res);
  res.send = jest.fn().mockReturnValue(res);
  return res;
};

const mockNext: NextFunction = jest.fn();

describe('Character Controller', () => {
  let repository: jest.Mocked<CharacterRepository>; // Usamos el repositorio mockeado

  beforeEach(() => {
    repository = new CharacterRepository() as jest.Mocked<CharacterRepository>; // Instanciamos el repositorio como un mock
    jest.clearAllMocks(); // Limpia los mocks entre cada prueba
  });

  describe('findAll', () => {
    it('should return all characters', () => {
      const req = mockRequest();
      const res = mockResponse();
      const characters = [
        new Character('John', 'Mage', 10, 100, 50, 20, ['staff'], '1'),
        new Character('Jane', 'Warrior', 12, 120, 60, 25, ['sword'], '2')
      ];

      repository.findAll.mockReturnValue(characters); // Mockear la función `findAll` del repositorio

      findAll(req as Request, res as Response);

      expect(repository.findAll).toHaveBeenCalled(); // Verifica que `findAll` fue llamado
      expect(res.json).toHaveBeenCalledWith({ data: characters }); // Verifica la respuesta con los personajes
    });
  });

  describe('findOne', () => {
    it('should return a character by id', () => {
      const req = mockRequest({}, { id: '1' });
      const res = mockResponse();
      const character = new Character('John', 'Mage', 10, 100, 50, 20, ['staff'], '1');

      repository.findOne.mockReturnValue(character); // Mockear `findOne` del repositorio

      findOne(req as Request, res as Response);

      expect(repository.findOne).toHaveBeenCalledWith({ id: '1' }); // Verifica que se buscó el personaje con el ID correcto
      expect(res.json).toHaveBeenCalledWith({ data: character }); // Verifica la respuesta
    });

    it('should return 404 if character is not found', () => {
      const req = mockRequest({}, { id: '1' });
      const res = mockResponse();

      repository.findOne.mockReturnValue(undefined); // Mockear `findOne` para que no encuentre el personaje

      findOne(req as Request, res as Response);

      expect(repository.findOne).toHaveBeenCalledWith({ id: '1' });
      expect(res.status).toHaveBeenCalledWith(404); // Verifica que se haya devuelto un error 404
      expect(res.send).toHaveBeenCalledWith({ message: 'Character not found' }); // Verifica el mensaje de error
    });
  });

  describe('add', () => {
    it('should add a new character', () => {
      const req = mockRequest({
        sanitizedInput: {
          name: 'John',
          characterClass: 'Mage',
          level: 10,
          hp: 100,
          mana: 50,
          attack: 20,
          items: ['staff'],
          id: '1'
        }
      });
      const res = mockResponse();
      const character = new Character(
        'John',
        'Mage',
        10,
        100,
        50,
        20,
        ['staff'],
        '1'
      );

      repository.add.mockReturnValue(character); // Mockear `add` para simular la adición del personaje

      add(req as Request, res as Response);

      expect(repository.add).toHaveBeenCalledWith(character); // Verifica que el personaje fue añadido correctamente
      expect(res.status).toHaveBeenCalledWith(201); // Verifica que se devolvió un 201
      expect(res.send).toHaveBeenCalledWith({
        message: 'Character created',
        data: character
      }); // Verifica la respuesta correcta
    });
  });

  describe('update', () => {
    it('should update an existing character', () => {
      const req = mockRequest(
        {
          sanitizedInput: {
            name: 'John Updated',
            level: 15,
            hp: 120,
            mana: 60,
            attack: 25
          }
        },
        { id: '1' }
      );
      const res = mockResponse();
      const updatedCharacter = new Character(
        'John Updated',
        'Mage',
        15,
        120,
        60,
        25,
        ['staff'],
        '1'
      );

      repository.update.mockReturnValue(updatedCharacter); // Mockear `update`

      update(req as Request, res as Response);

      expect(repository.update).toHaveBeenCalledWith({
        id: '1',
        name: 'John Updated',
        level: 15,
        hp: 120,
        mana: 60,
        attack: 25
      }); // Verifica que se llamó correctamente con el personaje actualizado
      expect(res.status).toHaveBeenCalledWith(200); // Verifica que el estado sea 200
      expect(res.send).toHaveBeenCalledWith({
        message: 'Character updated successfully',
        data: updatedCharacter
      }); // Verifica la respuesta correcta
    });

    it('should return 404 if character is not found during update', () => {
      const req = mockRequest(
        {
          sanitizedInput: {
            name: 'Non-existent character',
            level: 15
          }
        },
        { id: '9999' }
      );
      const res = mockResponse();

      repository.update.mockReturnValue(undefined); // Mockear `update` para que no encuentre el personaje

      update(req as Request, res as Response);

      expect(repository.update).toHaveBeenCalledWith({
        id: '9999',
        name: 'Non-existent character',
        level: 15
      });
      expect(res.status).toHaveBeenCalledWith(404); // Verifica que se devolvió un 404
      expect(res.send).toHaveBeenCalledWith({ message: 'Character not found' }); // Verifica el mensaje de error
    });
  });

  describe('remove', () => {
    it('should delete a character by id', () => {
      const req = mockRequest({}, { id: '1' });
      const res = mockResponse();
      const character = new Character('John', 'Mage', 10, 100, 50, 20, ['staff'], '1');

      repository.delete.mockReturnValue(character); // Mockear `delete`

      remove(req as Request, res as Response);

      expect(repository.delete).toHaveBeenCalledWith({ id: '1' }); // Verifica que se llamó correctamente con el ID
      expect(res.status).toHaveBeenCalledWith(200); // Verifica que se devolvió un 200
      expect(res.send).toHaveBeenCalledWith({ message: 'Character deleted successfully' }); // Verifica la respuesta
    });

    it('should return 404 if character is not found during delete', () => {
      const req = mockRequest({}, { id: '9999' });
      const res = mockResponse();

      repository.delete.mockReturnValue(undefined); // Mockear `delete` para que no encuentre el personaje

      remove(req as Request, res as Response);

      expect(repository.delete).toHaveBeenCalledWith({ id: '9999' });
      expect(res.status).toHaveBeenCalledWith(404); // Verifica que se devolvió un 404
      expect(res.send).toHaveBeenCalledWith({ message: 'Character not found' }); // Verifica el mensaje de error
    });
  });
});


/* const { sanitizeCharacterInput, findAll, findOne, add, update, remove } = require('./character.controller');
const { CharacterRepository } = require('./character.repository');
const { Character } = require('./character.entity');

// Mockear el repositorio
jest.mock('./character.repository');

// Crear mocks de Request, Response y NextFunction
const mockRequest = () => ({
  body: {},
  params: {},
});
/*
const mockResponse = () => {
  const res = {};
  res.json = jest.fn().mockReturnValue(res);
  res.status = jest.fn().mockReturnValue(res);
  res.send = jest.fn().mockReturnValue(res);
  return res;
}; 
const mockResponse = () => {
    const res: Partial<Response> = {
      json: jest.fn(),
      status: jest.fn().mockReturnThis(),
      send: jest.fn().mockReturnThis(),
    };
    return res as Response;

const mockNext = jest.fn();

describe('CharacterController', () => {
  let req;
  let res;
  let repository;

  beforeEach(() => {
    req = mockRequest();
    res = mockResponse();
    repository = new CharacterRepository(); // Acceder al repositorio mockeado
  });

  it('should return all characters in findAll', () => {
    // Simular una lista de personajes en el repositorio
    repository.findAll.mockReturnValue([
      { name: 'Darth Vader', characterClass: 'Sith' },
      { name: 'Yoda', characterClass: 'Jedi' },
    ]);

    findAll(req, res);

    expect(res.json).toHaveBeenCalledWith({
      data: [
        { name: 'Darth Vader', characterClass: 'Sith' },
        { name: 'Yoda', characterClass: 'Jedi' },
      ],
    });
  });

  it('should return a character in findOne', () => {
    // Simular un personaje en el repositorio
    const mockCharacter = { name: 'Luke Skywalker', characterClass: 'Jedi', id: '1' };
    req.params.id = '1';
    repository.findOne.mockReturnValue(mockCharacter);

    findOne(req, res);

    expect(res.json).toHaveBeenCalledWith({
      data: mockCharacter,
    });
  });

  it('should return 404 if character not found in findOne', () => {
    req.params.id = '9999';
    repository.findOne.mockReturnValue(null);

    findOne(req, res);

    expect(res.status).toHaveBeenCalledWith(404);
    expect(res.send).toHaveBeenCalledWith({ message: 'Character not found' });
  });

  it('should add a new character in add', () => {
    const mockCharacterInput = {
      name: 'Leia Organa',
      characterClass: 'Rebel Leader',
      level: 10,
      hp: 100,
      mana: 50,
      attack: 30,
      items: ['Blaster'],
      id: '5678',
    };
    req.body.sanitizedInput = mockCharacterInput;

    add(req, res);

    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.send).toHaveBeenCalledWith({
      message: 'Character created',
      data: { ...mockCharacterInput },
    });
  });

  it('should update an existing character in update', () => {
    const mockCharacter = {
      name: 'Leia Organa',
      characterClass: 'Rebel Leader',
      level: 20,
      hp: 120,
      mana: 80,
      attack: 35,
      items: ['Blaster'],
      id: '5678',
    };
    req.params.id = '5678';
    req.body.sanitizedInput = mockCharacter;

    repository.update.mockReturnValue(mockCharacter);

    update(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.send).toHaveBeenCalledWith({
      message: 'Character updated successfully',
      data: mockCharacter,
    });
  });

  it('should return 404 when updating a non-existent character', () => {
    req.params.id = '9999';
    req.body.sanitizedInput = { name: 'Han Solo', level: 20 };

    repository.update.mockReturnValue(null);

    update(req, res);

    expect(res.status).toHaveBeenCalledWith(404);
    expect(res.send).toHaveBeenCalledWith({ message: 'Character not found' });
  });

  it('should delete a character by id in remove', () => {
    req.params.id = '5678';

    repository.delete.mockReturnValue({ id: '5678' });

    remove(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.send).toHaveBeenCalledWith({ message: 'Character deleted successfully' });
  });

  it('should return 404 when deleting a non-existent character', () => {
    req.params.id = '9999';

    repository.delete.mockReturnValue(null);

    remove(req, res);

    expect(res.status).toHaveBeenCalledWith(404);
    expect(res.send).toHaveBeenCalledWith({ message: 'Character not found' });
  });
}); 
*/ 