import app from '../index'
const request = require("supertest");

beforeEach(() => {

})

afterEach(async () => {
    let res = await request(app).get('/api/pendings');
    let id = res.body[res.body.length-1]._id
    res = await request(app).delete('/api/pending/'+id);
})

afterAll(()=>{
    app.close()
})

test('getAllpendings', async() => {
    const pending = {
        firstName: 'Johnna',
        maidenName: 'Morgan',
        classYear: '2012',
        email: 'john.doe@example.com',
        password: 'secret'
        
      };
      
    let res = await request(app)
        .post('/api/pending')
        .set('Content-Type', 'application/json')
        .send(JSON.stringify(pending));

    res = await request(app).get('/api/pendings');
    expect(res.status).toBe(200)
    expect(Array.isArray(res.body)).toBe(true)
    
})

test('getByID', async() => {
    
    const pending = {
        firstName: 'Johnna',
        maidenName: 'Morgan',
        classYear: '2012',
        email: 'john.doe@example.com',
        password: 'secret'
        
      };
      
    let res = await request(app)
        .post('/api/pending')
        .set('Content-Type', 'application/json')
        .send(JSON.stringify(pending));

    res = await request(app).get('/api/pendings');
    let id = res.body[res.body.length-1]._id
    res = await request(app).get('/api/pending/' + id);
    expect(res.status).toBe(200)
})

test('create pending', async () =>{
    const pending = {
        firstName: 'Johnna',
        maidenName: 'Morgan',
        classYear: '2012',
        email: 'john.doe@example.com',
        password: 'secret'
        
      };
      
      const res = await request(app)
        .post('/api/pending')
        .set('Content-Type', 'application/json')
        .send(JSON.stringify(pending));
        
      expect(res.status).toBe(200);
      expect(res.body.firstName).toBe(pending.firstName);
      expect(res.body.email).toBe(pending.email);
      expect(res.body.password).toBe(pending.password);
})



test('delete pending', async () => {

    const pending = {
        firstName: 'Johnna',
        maidenName: 'Morgan',
        classYear: '2012',
        email: 'john.doe@example.com',
        password: 'secret'
        
      };
      
    res = await request(app)
        .post('/api/pending')
        .set('Content-Type', 'application/json')
        .send(JSON.stringify(pending));

    res = await request(app)
        .post('/api/pending')
        .set('Content-Type', 'application/json')
        .send(JSON.stringify(pending));

    let res = await request(app).get('/api/pendings');
    let id = res.body[res.body.length-1]._id
    res = await request(app).delete('/api/pending/'+id);
    expect(res.status).toBe(200);
    expect(res.body).toBeDefined()
})


