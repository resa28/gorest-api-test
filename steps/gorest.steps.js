import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const BASE_URL = "https://gorest.co.in/public/v2";
const TOKEN = `Bearer ${process.env.GOREST_TOKEN}`;
let userId;
let response;

// ------------------ CREATE USER ------------------
When("I send a POST request to create a new user", async () => {
  response = await axios.post(
    `${BASE_URL}/users`,
    {
      name: "Resa QA Automation",
      gender: "female",
      email: `resa_${Date.now()}@mail.com`,
      status: "active",
    },
    { headers: { Authorization: TOKEN } }
  );

  userId = response.data.id;
  console.log("POST Response:", response.data);
});

Then("the response status should be {int}", async (statusCode) => {
  console.log("Status Code:", response.status);
  expect(response.status).toBe(statusCode);
});

Then("the response should contain the user id", async () => {
  console.log("User ID:", userId);
  expect(userId).toBeDefined();
});

// ------------------ GET USER ------------------
Given("I have a valid user ID", async () => {
  if (!userId) {
    const res = await axios.post(
      `${BASE_URL}/users`,
      {
        name: "Temporary User",
        gender: "female",
        email: `temp_${Date.now()}@mail.com`,
        status: "active",
      },
      { headers: { Authorization: TOKEN } }
    );
    userId = res.data.id;
    console.log("Temporary User Created:", res.data);
  }
});

When("I send a GET request to get the user details", async () => {
  response = await axios.get(`${BASE_URL}/users/${userId}`, {
    headers: { Authorization: TOKEN },
  });
  console.log("GET Response:", response.data);
});

Then("the response should contain the correct user name", async () => {
  console.log("Checking user details:", response.data);
  expect(response.data.id).toBe(userId);
  expect(response.data.name).toBeDefined();
});

// ------------------ UPDATE USER ------------------
When("I send a PUT request to update the user details", async () => {
  response = await axios.put(
    `${BASE_URL}/users/${userId}`,
    { name: "Resa QA Updated" },
    { headers: { Authorization: TOKEN } }
  );
  console.log("PUT Response:", response.data);
});

Then("the response should contain the updated name", async () => {
  console.log("Updated Name:", response.data.name);
  expect(response.data.name).toBe("Resa QA Updated");
});
