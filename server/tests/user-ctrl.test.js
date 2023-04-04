const mongoose = require('mongoose');
const request = require('supertest');
const app = require('../index');
//const User = require('../models/user-model');
const ctrl = require('../controllers/user-ctrl')

beforeAll(async () => {
  await mongoose.connect('mongodb+srv://cparker2310:astonsoccer@cluster0.2sqxf.mongodb.net/maryvale_temp', { useNewUrlParser: true });
});

afterAll(async () => {
  await mongoose.connection.close();
});

describe('User controller create', () => {
    let user;

    
    it('should create a new user', () => {
        const req = { body: {
        firstName: 'Mia',
        maidenName: 'Doe',
        marriedName: 'Brown',
        classYear: '2008',
        currentCity: 'Arlington',
        currentState: 'Virginia',
        universityName: 'Marymount University',
        degree: 'Bachelor of Science',
        areaStudy: 'Nursing',
        gradYear: '2012',
        position: 'Registered Nurse',
        companyName: 'Virginia Hospital Center',
        industry: 'Medical',
        phone: '443-566-3189',
        email: 'miabrown08@gmail.com',
        password: 'mypass123'
            } 
        }/*
        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn(),
          };*/
        ctrl.createUser(req);
        console.log(res.status.mock.calls);
        expect(res.status).toHaveBeenCalledWith(201);
        expect(res.json).toHaveBeenCalledWith({
            success: true,
            id: expect.any(String),
            message: 'User created!',
          });
    
        })
    })
