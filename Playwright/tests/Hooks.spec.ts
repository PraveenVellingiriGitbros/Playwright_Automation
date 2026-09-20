/* 
    Hooks: It is a playwright method that we used to manage the test.
        1. beforeAll() - Run Only once before the test. Means One spec.ts file.
        2. beforeEach() - Runs before each test, This runs based on test, ex: 5 test means then it run 5 times. multiple times 
        3. afterEach() - Run after each test, This runs based on test, ex: 5 test means then it run 5 times. multiple times.
        4. afterAll() - Run Only once after the test. Means One spec.ts file.

    Ex:
    beforeAll => DB connection setup, environment setups
    afterAll => close DB connection
    beforeEach => Login to website
    afterEach => logout from website
*/

import {test} from '@playwright/test'

test.beforeAll('Before All', async()=>{
    console.log("Before All - Test Started");
})

test.beforeEach('Before Each', async()=>{
    console.log("Before Each...");
})

test.afterEach('After Each', async()=>{
    console.log("After Each...");
})

test.afterAll('After All', async()=>{
    console.log("After All - Test Completed");
})

test('TestCase 1',async()=>{
    console.log("TestCase 1");
})

test('TestCase 2',async()=>{
    console.log("TestCase 2");
})

