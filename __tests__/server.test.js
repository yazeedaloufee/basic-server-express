'use strict';
const server = require('../src/server.js');
const supertest = require('supertest');
const request = supertest(server.server);


describe('server', () => {
  
    it('should get 404 status', async () => {
        const response = await request.get('/foo');
        expect(response.status).toBe(404);
    });

    it('should get 404 status on bad methoud', async () => {
        const response = await request.patch('/foo');
        expect(response.status).toBe(404);
    });

    it('should get 500 status', async () => {
        const response = await request.get('/bad');
        expect(response.status).toBe(500);
    });

    it('should get 500 error', async()=>{
        const response = await request.get('/person?name=');
        expect(response.status).toEqual(500);
      });

    it('should get 200 status', async () => {
        const response = await request.get('/person/yazeed');
        expect(response.status).toBe(200);
        expect(response.body.name).toBe('yazeed')
    });
const obj={
    name: "yazeed"
}
    


})