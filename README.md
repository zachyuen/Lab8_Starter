# Lab 8 - Starter
Names: Zach Yuen  
1) I would fit the Recipe project development pipeline automated tests within a Github action that runs whenever the code is pushed because it's generally faster than manually testing and safer than testing after development is complete since it requires your code to pass the tests every time you push it.  
2) No, you wouldn't use an end-to-end test to check if a function is returning the correct output.  
3) No, because a unit test is used to test a single function, method, property, etc. Since the message feature involves a user writing and sending a message to another user, it involves multiple components of the system so a unit test would not be correct here.  
4) Yes, the max message length seems to be an independent component so a unit test would be correct to test it.  
