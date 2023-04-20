import app from '../index'
const request = require("supertest");

beforeEach(() => {

})

afterEach(async () => {
    let res = await request(app).get('/api/messages');
    let id = res.body[res.body.length-1]._id
    res = await request(app).delete('/api/message/'+id);
})

afterAll(()=>{
    app.close()
})

test('getAllmessages', async() => {
    const message = {
        author_id: 'fake id',
        title: 'message posting',
        description: 'working for me',
      };

      
    let res = await request(app)
        .post('/api/message')
        .set('Content-Type', 'application/json')
        .send(JSON.stringify(message));

    res = await request(app).get('/api/messages');
    expect(res.status).toBe(200)
    expect(Array.isArray(res.body)).toBe(true)
    
})

test('getByID', async() => {
    
    const message = {
        author_id: 'fake id',
        title: 'message posting',
        description: 'working for me',
      };
      
    let res = await request(app)
        .post('/api/message')
        .set('Content-Type', 'application/json')
        .send(JSON.stringify(message));

    res = await request(app).get('/api/messages');
    let id = res.body[res.body.length-1]._id
    res = await request(app).get('/api/message/' + id);
    expect(res.status).toBe(200)
})

test('create message', async () =>{
    const message = {
        author_id: 'fake id',
        title: 'message posting',
        description: 'working for me',
      };
      
      const res = await request(app)
        .post('/api/message')
        .set('Content-Type', 'application/json')
        .send(JSON.stringify(message));
        
      expect(res.status).toBe(200);
      //expect(res.body.author_id).toBe(message.author_id);
      expect(res.body.description).toBe(message.description);
      expect(res.body.title).toBe(message.title);
})

test('update message', async () =>{
    const message = {
        author_id: 'fake id',
        title: 'message posting',
        description: 'working for me',
      };
      
    let res = await request(app)
        .post('/api/message')
        .set('Content-Type', 'application/json')
        .send(JSON.stringify(message));

    res = await request(app).get('/api/messages');
    let id = res.body[res.body.length-1]._id
    res = await request(app).get('/api/message/' + id);
    expect(res.status).toBe(200)


    const updated = {
        author_id: 'new id',
        title: 'new posting',
        description: 'new desc',
      };

    res = await request(app)
        .put('/api/message/'+id)
        .send(updated);

    expect(res.status).toBe(200)
    res = await request(app).get('/api/message/' + id);
    expect(res.status).toBe(200)
    expect(res.body.title).toBe(updated.title);
    expect(res.body.type).toBe(updated.type);
})

test('delete message', async () => {

    const message = {
        author_id: 'fake id',
        title: 'message posting',
        description: 'working for me',
      };
      
    res = await request(app)
        .post('/api/message')
        .set('Content-Type', 'application/json')
        .send(JSON.stringify(message));

    res = await request(app)
        .post('/api/message')
        .set('Content-Type', 'application/json')
        .send(JSON.stringify(message));

    let res = await request(app).get('/api/messages');
    let id = res.body[res.body.length-1]._id
    res = await request(app).delete('/api/message/'+id);
    expect(res.status).toBe(200);
    expect(res.body).toBeDefined()
})


