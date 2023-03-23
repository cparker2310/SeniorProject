const jobModel = require("../server/models/job-model");

const db = require("../server/db/index");

describe("Test for posting new job", () => {
    it('Database should save the new job', async done => {
        const res= await resquest.post('/job')
        .send({
            title: "RN Clinical Nurse",
            companyName: "Johns Hopkins Medicine",
            location: "Baltimore, MD",
            jobType: "Full Time",
            description: "Current registered nurse license in the state of Maryland, or licensed in a compact state.  Current CPR certification.  2 years of recent nursing experience",
            isAvailable: true,
            contactName: "Mary Johnson '78",
            contactInfo: "mjohnson@gmail.com"
        });
        done();
    })

    beforeEach(async () => {
        await db.connect();
    });

    afterEach(async () => {
        await db.connection.close();
    });
});

