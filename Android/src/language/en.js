module.exports = {
  title: "Estée Lauder Holiday Game On!",
  desc:
    "Capture four identical Queen of Hearts to win a FREE Estée Lauder sample",
  language: "EN",
  start: {
    head:
      "Capture four identical Queen of Hearts to win a FREE Estée Lauder sample",
    tap: "Tap anywhere to begin"
  },
  rule: {
    title: "Game Rules",

    content: `
      <div class='p'><div class='line big'>
      Choose your Queen of Hearts and keep a close eye on her! Find her four times to win.
      </div></div>
    `,
    start: "Start Game",
    terms: "Game Terms"
  },
  terms: {
    title: "Game Terms",
    content: `
      <div class='p'><div class='line'>
      Save your QR code to redeem your gift. 
      </div></div>
    
      <div class='p'><div class='line'>
      Limit one per person while supplies last. Gifts are first come, first serve and may vary by location.
      </div></div>
    
      <div class='p'><div class='line small'>
      *Estée Lauder Travel Retail reserves the final right for this campaign.    
      </div></div>
    `
  },
  game: {
    chooseQueen: "Choose your Queen.",
    chooseSuccess: "Your Queen of Hearts has been selected!",
    tap:
      "Tap your Queen of Hearts<br/>Four of a kind wins!",
    congratulations: "Congratulations, you win!",
    scan:
      "Please use your mobile to scan the QR Code below and redeem your exclusive gift!"
  },
  success: {
    Congratulations: "Congratulations!",
    content: `
    <div class='p'>
      <div class='line'>
        Please present this page to a beauty advisor at your selected Estée Lauder Travel Retail counter, and ensure the beauty advisor taps on the "Confirm" button.
      </div>
    </div>
    <div class='p'>
      <div class='line'>
        Your right to redeem your free gift will be revoked if you click the button yourself.
      </div>
    </div>
    `,
    confirm: "Confirm",
    terms: "Game Terms",
    success: "Code redemption successful, thank you for participating.",
    fail: "Invalid redemption code.",
    used: "This code has already been redeemed."
  },
  successSec: {
    title: "恭喜挑战成功！",
    content: `
    <div class='p'>
      <div class='line'>
        Congratulations, you've caught four of a kind! 
      </div>
    </div>

    <div class='p'>
      <div class='line'>
        You win an exclusive Estée Lauder sample*! 
      </div>
    </div>

    <div class='p'>
      <div class='line'>
        Ask a Beauty Advisor for your prize and to learn more about our Holiday looks. 
      </div>
    </div>

    <div class='p'>
      <div class='line small'>
        *One per person. While supplies last.
      </div>
    </div>
    `
  }
};
