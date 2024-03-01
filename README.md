# SQE-TermProject

The tool has the following features and modules:

## Automated Test case or suit generator for given SUT

This module shall be UI-based, accept the source code of the system under test (SUT) in a specific language (TS), and generate test cases or test suites to achieve 100% code (or maximum possible) coverage of the SUT by generating test cases using random values. This will ideally be fully automated. Tool is only wokring for simple functions but not for classes,etc. 

The test cases can be generated to maximize coverage for the given coverage criteria:

1) Statement Coverage; 2) Branch (Decision Coverage); 3) Condition Coverage; 4) Functional Coverage; and 5) Multiple Condition/Decision Coverage., you are allowed to add more.
 
The test data in the test suites can be generated using any intelligent scheme or intelligent algorithm, so that the generated data can be used to maximize the coverage of a given criteria. For the generation of test cases or suites, every group must use G-Test, JEST, or a similar UNIT framework. 

For automated execution of a generated test case or suit, you may create a static template that can help in the automated execution of your generated test case.


## Automated Coverage Report Generation for Test Cases or Test Suites

This module shall be UI-based; it uses the generated test suits or test cases from Module 1, executes those on SUT, and generates the coverage report. The report should ideally be exportable as a pdf and show the coverage achieved by the selected test cases or suits. The UI must be intuitive, and the end user can easily observe what part of the SUT is not yet covered by the given test suites or test cases. And the same information can be exported to PDF as well for inspection purposes.

The tool support only two languages 1) JS (Typescript)

Regarding the features and guidance on how such a tool can be developed and used, Read the following article https://www.browserstack.com/guide/code-coverage-tools.

### Project To be Made Available By 28th Feb,2024
