module.exports = {
  language: "EN",
  start: {
    head:
      "Capture four identical Queen of Hearts to win a FREE Estée Lauder sample",
    tap: "Tap anywhere to begin"
  },
  rule: {
    title: "Game Rules",
    content: `
      <div class='p'><div class='line'>
      Choose your Queen of Hearts and keep a close eye on her! 
      </div></div>
      <div class='p'><div class='line'>
      All four Queens will randomly appear across the windows of the townhouse;v players must capture their chosen Queen of Hearts four times to win.
      </div></div>
      <div class='p'  style="margin-bottom:3vw"><div class='line'>
      Limit one per person. Gifts can only be redeemed at participating Estée Lauder Travel Retail locations while supplies last. 
      </div></div>
      <div class='p' style="margin-top:3vw"><div class='line small'>
      *Estée Lauder Travel Retail reserves the final right for this campaign.
      </div></div>
    `,
    start: "Start Game",
    terms: "Game Terms"
  },
  terms: {
    title: "Game Terms",
    content: `
      <div class='p'>
        <div class='line'>
          Samples of your Estée Lauder holiday must haves include:
        </div>
        <div class='line'>
          (Product name & size)
        </div>
      </div>
    
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
    tap: "Tap to capture your Queen of Hearts. Four of a kind wins!",
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
  }
};
