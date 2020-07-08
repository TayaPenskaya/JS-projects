import supertest from 'supertest';

import app from '../src/app';
import { sequelize } from '../src/db';

const request = supertest(app);

const cleanDb: () => void = async () => {
  const tableNames = Object.keys(sequelize.models);
  await sequelize.query(`TRUNCATE ${tableNames.map(name => `"${name}"`).join(', ')} CASCADE;`);
};

describe('API', () => {
  beforeAll(async () => {
    // Здесь создаются все таблицы по моделям
    await sequelize.sync({ force: true });
  });

  beforeEach(async () => {
    await cleanDb();
  });

  it('Должно вернуть список мест', async () => {
    const res = await request.get('/locations');

    expect(res.status).toBe(200);
    expect(res.body).toBeInstanceOf(Array);
  });

  it('Должно создать место', async () => {
    const resPost = await request.post('/locations').send({
      name: 'test name',
      description: 'test description'
    });

    const resGet = await request.get('/locations');
    const expectedPartResponse = {
      name: 'test name',
      description: 'test description',
      visited: false
    };

    expect(resPost.status).toBe(204);
    expect(resGet.body[0]).toMatchObject(expectedPartResponse);
  });

  it('Должно вернуть место по id', async () => {
    await request.post('/locations').send({
      name: 'test name by id',
      description: 'test description by id'
    });

    const resGet = await request.get('/locations/2');
    const expectedPartResponse = {
      name: 'test name by id',
      description: 'test description by id',
      visited: false
    };

    expect(resGet.status).toBe(200);
    expect(resGet.body).toMatchObject(expectedPartResponse);
  });

  it('Должно удалить место по id', async () => {
    await sequelize.sync({ force: true });
    await request.post('/locations').send({
      name: 'test name by id',
      description: 'test description by id'
    });

    const resDelete = await request.delete('/locations/1');
    const resGetAfter = await request.get('/locations/1');

    expect(resDelete.status).toBe(204);
    expect(resGetAfter.status).toBe(404);
  });
});
