const quote=[
    `“When you change your thoughts, remember to also change your world.” —Norman Vincent Peale`,
    `“We cannot solve problems with the kind of thinking we employed when we came up with them.” —Albert Einstein`,
    `“Learn as if you will live forever, live like you will die tomorrow.” —Mahatma Gandhi`,
    `“Stay away from those people who try to disparage your ambitions. Small minds will always do that, but great minds will give you a feeling that you can become great too.” —Mark Twain`,
    `“It is only when we take chances that our lives improve. The initial and the most difficult risk we need to take is to become honest.” —Walter Anderson`,
    `“Nature has given us all the pieces required to achieve exceptional wellness and health, but has left it to us to put these pieces together.” —Diane McLaren`,
    `“When you give joy to other people, you get more joy in return. You should give a good thought to the happiness that you can give out.” —Eleanor Roosevelt`,
    `“Success is not final; failure is not fatal: It is the courage to continue that counts.” —Winston Churchill`,
    `“It is better to fail in originality than to succeed in imitation.” —Herman Melville`,
    `“The road to success and the road to failure are almost exactly the same.” —Colin R. Davis`,
    `“The pessimist sees difficulty in every opportunity. The optimist sees opportunity in every difficulty.” —Winston Churchill`,
    `“Don’t let yesterday take up too much of today.” —Will Rogers`,
    `“You learn more from failure than from success. Don’t let it stop you. Failure builds character.” —Unknown`,
    `“If you are working on something that you really care about, you don’t have to be pushed. The vision pulls you.” —Steve Jobs`,
    `“Experience is a hard teacher because she gives the test first, the lesson afterward.” ―Vernon Sanders Law`,
    `“To know how much there is to know is the beginning of learning to live.” —Dorothy West`,
    `“Goal setting is the secret to a compelling future.” —Tony Robbins`,
    `“Concentrate all your thoughts upon the work in hand. The sun’s rays do not burn until brought to a focus.” —Alexander Graham Bell`,
    `“Setting goals is the first step in turning the invisible into the visible.” —Tony Robbins`,
    `“When we strive to become better than we are, everything around us becomes better too.” —Paulo Coelho`,
]
let para=document.querySelector('.para');
let btn=document.querySelector('button');

btn.addEventListener("click",()=>{
    let rand=Math.floor(Math.random()*20);
    para.innerText=quote[rand];
    console.log(quote[rand]);
})
