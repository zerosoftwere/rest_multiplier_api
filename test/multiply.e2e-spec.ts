import { Test, TestingModule } from '@nestjs/testing';
import * as request from 'supertest';
import { MultiplyModule } from './../src/multiply/multiply.module';

describe('MultiplyController (e2e)', () => {
    let app;
  
    beforeEach(async () => {
      const moduleFixture: TestingModule = await Test.createTestingModule({
        imports: [MultiplyModule],
      }).compile();
  
      app = moduleFixture.createNestApplication();
      await app.init();
    });
  
    it('/multiply (POST)', () => {
      return request(app.getHttpServer())
        .post('/multiply').send({'numbers': [1,2,3,4,5]})
        .expect(200)
        .expect({result: 120})
    });
  });