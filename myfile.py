import random
my_bot_brain = {
    "happy":["The selfish gent","The toy story","the happy prince"],
    "sad":["the little match girl","the last leaf","the necklace"],
    "bored":["the cop and the anthem","the great gatsby","THE RANSOM OF RED CHIEF"]}
# welcome message
print("Welcome to MY STORY BOT Assistant!")
print("Hello! I am Your Story Bot. I can recommend you stories based on your mood. Please tell me how are you feeling today? (happy/sad/bored)")

user_mood = input("Enter your mood:Happy, Sad, Bored:" ).lower()
if user_mood in my_bot_brain:
    print ("Here are some stories you might enjoy:")
    for story in my_bot_brain[user_mood]:

      print("-" + story)

else:
  print("Sorry, I dont have any stories for that mode . Please try again with Happy ,Sad or Bored" \
"")
print("Thank you for using My Story Bot")
