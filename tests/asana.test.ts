import { test, expect } from '@playwright/test';

const testCases = [
  {
    id: 1,
    name: "Test Case 1",
    leftNav: "Cross-functional project plan, Project",
    column: "To do",
    card_title: "Draft project brief",
  },
  {
    id: 2,
    name: "Test Case 2",
    leftNav: "Cross-functional project plan, Project",
    column: "To do",
    card_title: "Schedule kickoff meeting",
  },
  {
    id: 3,
    name: "Test Case 3",
    leftNav: "Cross-functional project plan, Project",
    column: "To do",
    card_title: "Share timeline with teammates",
  },
  {
    id: 4,
    name: "Test Case 4",
    leftNav: "Work Requests",
    column: "New Requests",
    card_title: "[Example] Laptop setup for new hire",
  },
  {
    id: 5,
    name: "Test Case 5",
    leftNav: "Work Requests",
    column: "In Progress",
    card_title: "[Example] Password not working",
  },
  {
    id: 6,
    name: "Test Case 6",
    leftNav: "Work Requests",
    column: "Completed",
    card_title: "[Example] New keycard for Daniela V",
  }
];

test.describe('Asana Data-Driven Tests', () => {
  for (const data of testCases) {
    test(data.name, async ({ page }) => {
      await test.step('Login to Asana', async () => {
        await page.goto('https://app.asana.com/-/login');
        await page.fill('input[name="email"]', 'ben+pose@workwithloop.com');
        await page.fill('input[name="password"]', 'Password123');
        await page.click('button[type="submit"]');
        await page.waitForNavigation();
      });

      await test.step('Navigate to the project page', async () => {
        const [leftNav, project] = data.leftNav.split(', ');
        await page.click(`text=${leftNav}`);
        await page.click(`text=${project}`);
        await page.waitForSelector(`text=${data.column}`);
      });

      await test.step('Verify the card is within the right column', async () => {
        const columnSelector = `//div[contains(@class, 'Column')]//div[contains(@class, 'ColumnHeader') and text()="${data.column}"]`;
        const cardSelector = `//div[contains(@class, 'Card') and text()="${data.card_title}"]`;
        await expect(page.locator(`${columnSelector} ${cardSelector}`)).toBeVisible();
      });
    });
  }
});
