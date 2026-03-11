import { DayPlan } from './types';

export const TRAINING_PLAN: DayPlan[] = [
  {
    day: 1,
    title: "Java Fundamentals for Testers",
    description: "Master the core Java concepts required for automation frameworks.",
    topics: ["Classes & Objects", "Methods & Parameters", "Collections (List, Map)", "Exception Handling"],
    tasks: [
      { id: "d1-t1", title: "Set up JDK and IntelliJ IDEA", completed: false },
      { id: "d1-t2", title: "Write a program using ArrayList and HashMap", completed: false },
      { id: "d1-t3", title: "Implement basic inheritance and interfaces", completed: false }
    ],
    resources: [
      { title: "Java for Testers - Full Course", url: "https://www.youtube.com/watch?v=RRubcjpTkks", type: "video" },
      { title: "Java Collections Framework", url: "https://docs.oracle.com/javase/8/docs/technotes/guides/collections/overview.html", type: "documentation" }
    ]
  },
  {
    day: 2,
    title: "Maven & Project Management",
    description: "Understand how to manage dependencies and build lifecycles.",
    topics: ["pom.xml structure", "Dependency Management", "Maven Lifecycle", "Plugins"],
    tasks: [
      { id: "d2-t1", title: "Create a new Maven project", completed: false },
      { id: "d2-t2", title: "Add JUnit and AssertJ dependencies", completed: false },
      { id: "d2-t3", title: "Run 'mvn clean install' from terminal", completed: false }
    ],
    resources: [
      { title: "Maven in 5 Minutes", url: "https://maven.apache.org/guides/getting-started/maven-in-five-minutes.html", type: "documentation" },
      { title: "Understanding pom.xml", url: "https://www.baeldung.com/maven-pom", type: "article" }
    ]
  },
  {
    day: 3,
    title: "BDD & Gherkin Syntax",
    description: "Learn the art of writing human-readable test scenarios.",
    topics: ["BDD Philosophy", "Gherkin Keywords (Given, When, Then)", "Scenario Outlines", "Background"],
    tasks: [
      { id: "d3-t1", title: "Write a feature file for a Login functionality", completed: false },
      { id: "d3-t2", title: "Use Scenario Outline for data-driven tests", completed: false },
      { id: "d3-t3", title: "Practice writing 'Background' for common steps", completed: false }
    ],
    resources: [
      { title: "Cucumber Gherkin Reference", url: "https://cucumber.io/docs/gherkin/reference/", type: "documentation" },
      { title: "Writing Better Gherkin", url: "https://automationpanda.com/2017/01/30/bdd-101-writing-good-gherkin/", type: "article" }
    ]
  },
  {
    day: 4,
    title: "Cucumber with Java",
    description: "Glue your Gherkin scenarios to Java code.",
    topics: ["Step Definitions", "Cucumber Runner", "Hooks (@Before, @After)", "Parameter Types"],
    tasks: [
      { id: "d4-t1", title: "Map Gherkin steps to Java methods", completed: false },
      { id: "d4-t2", title: "Set up a TestRunner class", completed: false },
      { id: "d4-t3", title: "Implement Cucumber Hooks for setup/teardown", completed: false }
    ],
    resources: [
      { title: "Cucumber Java Tutorial", url: "https://cucumber.io/docs/guides/10-minute-tutorial/", type: "documentation" },
      { title: "Cucumber Expressions", url: "https://github.com/cucumber/cucumber-expressions#readme", type: "documentation" }
    ]
  },
  {
    day: 5,
    title: "Serenity BDD Framework",
    description: "Enhance your tests with powerful reporting and abstractions.",
    topics: ["Serenity Architecture", "Page Objects", "Action Classes", "Living Documentation"],
    tasks: [
      { id: "d5-t1", title: "Integrate Serenity with Cucumber", completed: false },
      { id: "d5-t2", title: "Create a Serenity PageObject", completed: false },
      { id: "d5-t3", title: "Generate and view a Serenity Report", completed: false }
    ],
    resources: [
      { title: "Serenity BDD User Guide", url: "https://serenity-bdd.github.io/theserenitybook/latest/index.html", type: "documentation" },
      { title: "Serenity with Cucumber", url: "https://serenity-bdd.github.io/theserenitybook/latest/cucumber.html", type: "documentation" }
    ]
  },
  {
    day: 6,
    title: "Advanced Serenity & Patterns",
    description: "Master advanced patterns like Screenplay and Data-driven testing.",
    topics: ["Screenplay Pattern", "Data-driven Serenity", "Tags & Filtering", "Parallel Execution"],
    tasks: [
      { id: "d6-t1", title: "Refactor a test using Screenplay Pattern", completed: false },
      { id: "d6-t2", title: "Run tests in parallel using Maven Failsafe", completed: false },
      { id: "d6-t3", title: "Use @WithTag to categorize tests", completed: false }
    ],
    resources: [
      { title: "Screenplay Pattern Intro", url: "https://serenity-bdd.github.io/theserenitybook/latest/screenplay.html", type: "documentation" },
      { title: "Advanced Serenity Reporting", url: "https://serenity-bdd.github.io/theserenitybook/latest/extended-reports.html", type: "documentation" }
    ]
  },
  {
    day: 7,
    title: "Capstone Project",
    description: "Build a complete automation suite from scratch.",
    topics: ["Framework Design", "CI/CD Integration", "Best Practices", "Review"],
    tasks: [
      { id: "d7-t1", title: "Automate a full end-to-end user journey", completed: false },
      { id: "d7-t2", title: "Ensure all tests pass and reports are clean", completed: false },
      { id: "d7-t3", title: "Push code to a Git repository", completed: false }
    ],
    resources: [
      { title: "Automation Best Practices", url: "https://testautomationuniversity.applitools.com/setting-a-foundation-for-successful-test-automation/", type: "video" },
      { title: "Building a Framework from Scratch", url: "https://www.toolsqa.com/selenium-webdriver/test-automation-framework/", type: "article" }
    ]
  }
];
