const { assertFails, assertSucceeds } = require('@firebase/rules-unit-testing');
const { setup, teardown } = require('./helpers');

const mockUser = {
    uid: 'bob',
}

const mockData = {
    'users/bob': {
        roles: ['admin']
    },
    'tips/abc': {
        description: 'hello world',
        uid: 'alice',
        createdAt: null,
    }
};

describe('Database rules', () => {
    let db;

    // Applies only to tests in this describe block
    beforeAll(async () => {
        db = await setup(mockUser, mockData);
    });

    afterAll(async () => {
        await teardown();
    });

    test('deny when reading an unauthorized collection', async () => {
        const ref = db.collection('secret-stuff');

        expect(await assertFails(ref.get()));

    });

    test('allow admin to read unpublished posts', async () => {
        const ref = db.doc('tips/abc');

        expect(await assertSucceeds(ref.get()));

    });

});