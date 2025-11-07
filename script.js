// Define study
const study = lab.util.fromObject({
  "title": "root",
  "type": "lab.flow.Sequence",
  "parameters": {},
  "plugins": [
    {
      "type": "lab.plugins.Metadata",
      "path": undefined
    },
    {
      "type": "lab.plugins.PostMessage",
      "path": undefined
    }
  ],
  "metadata": {
    "title": "",
    "description": "",
    "repository": "",
    "contributors": ""
  },
  "files": {},
  "responses": {},
  "content": [
    {
      "type": "lab.html.Page",
      "items": [
        {
          "required": true,
          "type": "html",
          "content": "\u003Cstyle\u003E\r\n  section {\r\n    font-family: \"Segoe UI\", Arial, sans-serif;\r\n    background: #f9fafc;\r\n    border: 1px solid #ddd;\r\n    border-radius: 12px;\r\n    padding: 20px 24px;\r\n    margin: 20px auto;\r\n    max-width: 1000px;\r\n    box-shadow: 0 2px 6px rgba(0,0,0,0.05);\r\n  }\r\n  section h2 {\r\n    color: #1e3a8a;\r\n    border-bottom: 2px solid #3b82f6;\r\n    padding-bottom: 6px;\r\n    margin-bottom: 14px;\r\n  }\r\n  ul {\r\n    list-style: disc;\r\n    margin-left: 20px;\r\n    line-height: 1.6;\r\n  }\r\n  li {\r\n    margin-bottom: 10px;\r\n  }\r\n  strong {\r\n    color: #0f172a;\r\n  }\r\n  em {\r\n    color: #dc2626;\r\n    font-style: normal;\r\n  }\r\n  .highlight {\r\n    background: #fff8c5;\r\n    padding: 2px 5px;\r\n    border-radius: 4px;\r\n  }\r\n\u003C\u002Fstyle\u003E\r\n\r\n\u003Csection id=\"purpose\"\u003E\r\n  \u003Ch2\u003EPurpose\u003C\u002Fh2\u003E\r\n  \u003Cul\u003E\r\n    \u003Cli\u003E\r\n      You will take part in a short listening study about\r\n      \u003Cspan class=\"highlight\"\u003Ehow humans can notice noise in audio\u003C\u002Fspan\u003E.\r\n    \u003C\u002Fli\u003E\r\n    \u003Cli\u003E\r\n      In each trial, you will listen to two versions of the same speech sample:\r\n      \u003Cstrong\u003EAudio A\u003C\u002Fstrong\u003E and \u003Cstrong\u003EAudio B\u003C\u002Fstrong\u003E.\r\n    \u003C\u002Fli\u003E\r\n    \u003Cli\u003E\r\n      One version may contain a small \u003Cspan class=\"highlight\"\u003Eadded noise\u003C\u002Fspan\u003E, the other is the \u003Cstrong\u003Eoriginal\u003C\u002Fstrong\u003E; in some trials, \u003Cstrong\u003Eboth audios are identical\u003C\u002Fstrong\u003E.\r\n    \u003C\u002Fli\u003E\r\n    \u003Cli\u003E\r\n      \u003Cem\u003ENote:\u003C\u002Fem\u003E the speech sample may contain natural background sounds\r\n      (e.g., music, talking, etc.). These are part of the original recording and \u003Cstrong\u003Eshould not be considered as added noise\u003C\u002Fstrong\u003E.\r\n    \u003C\u002Fli\u003E\r\n    \u003Cli\u003E\r\n      Contact: Phuc Nguyen - ducphuc001@e.ntu.edu.sg\r\n    \u003C\u002Fli\u003E\r\n  \u003C\u002Ful\u003E\r\n\u003C\u002Fsection\u003E\r\n\r\n\u003Csection id=\"instruction\"\u003E\r\n  \u003Ch2\u003EInstructions\u003C\u002Fh2\u003E\r\n  \u003Cul\u003E\r\n    \u003Cli\u003E\u003Cstrong\u003ESit in a quiet environment.\u003C\u002Fstrong\u003E\u003C\u002Fli\u003E\r\n    \u003Cli\u003EBefore you start, set a \u003Cstrong\u003Elistening volume\u003C\u002Fstrong\u003E on the first sample.\u003C\u002Fli\u003E\r\n    \u003Cli\u003E\r\n      For each trial:\r\n      \u003Cul\u003E\r\n        \u003Cli\u003EListen to \u003Cstrong\u003EAudio A\u003C\u002Fstrong\u003E, then \u003Cstrong\u003EAudio B\u003C\u002Fstrong\u003E (same sentence).\u003C\u002Fli\u003E\r\n        \u003Cli\u003EYou may \u003Cspan class=\"highlight\"\u003Ereplay the pair ONCE\u003C\u002Fspan\u003E if needed.\u003C\u002Fli\u003E\r\n        \u003Cli\u003E\r\n          Rate how noticeable the noise (if any) is on a \u003Cstrong\u003E1–5 scale\u003C\u002Fstrong\u003E:  \r\n          \u003Cbr\u003E1 = No noise (A=B) or Unnoticeable noise\r\n          \u003Cbr\u003E2 = Slightly\r\n          \u003Cbr\u003E3 = Moderately\r\n          \u003Cbr\u003E4 = Very\r\n          \u003Cbr\u003E5 = Extremely\r\n        \u003C\u002Fli\u003E\r\n        \u003Cli\u003EIndicate \u003Cstrong\u003Ewhich audio you believe contains the noise (if any)\u003C\u002Fstrong\u003E.\u003C\u002Fli\u003E\r\n      \u003C\u002Ful\u003E\r\n    \u003C\u002Fli\u003E\r\n    \u003Cli\u003E\r\n      There are \u003Cspan class=\"highlight\"\u003E21 trials total\u003C\u002Fspan\u003E (about 2 minutes).\r\n    \u003C\u002Fli\u003E\r\n    \u003Cli\u003E\r\n      Please \u003Cstrong\u003Edo not adjust the volume\u003C\u002Fstrong\u003E between trials.\r\n    \u003C\u002Fli\u003E\r\n  \u003C\u002Ful\u003E\r\n\u003C\u002Fsection\u003E\r\n",
          "name": ""
        },
        {
          "required": true,
          "type": "divider"
        },
        {
          "required": false,
          "type": "input",
          "label": "What is your name?",
          "name": "user_name"
        },
        {
          "required": true,
          "type": "radio",
          "label": "Please indicate which device you are currently using.",
          "options": [
            {
              "label": "Earphone",
              "coding": "earphone"
            },
            {
              "label": "Headphone",
              "coding": "headphone"
            },
            {
              "label": "Speaker",
              "coding": "speaker"
            },
            {
              "label": "Others",
              "coding": "others"
            }
          ],
          "name": "device"
        },
        {
          "required": true,
          "type": "divider"
        },
        {
          "required": true,
          "type": "html",
          "content": "\u003Cstyle\u003E\r\n  .audio-container {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: flex-start;\r\n    gap: 30px;\r\n    flex-wrap: nowrap;\r\n    margin: 20px auto;\r\n    max-width: 1000px;\r\n  }\r\n  .audio-box {\r\n    flex: 1;\r\n    min-width: 400px;\r\n    background: #f9fafc;\r\n    border: 1px solid #ddd;\r\n    border-radius: 10px;\r\n    padding: 10px 15px;\r\n    box-shadow: 0 1px 5px rgba(0,0,0,0.08);\r\n  }\r\n  .audio-box h3 {\r\n    text-align: center;\r\n    color: #1e3a8a;\r\n    margin-bottom: 8px;\r\n  }\r\n  iframe {\r\n    width: 100%;\r\n    height: 166px;\r\n    border: none;\r\n    border-radius: 8px;\r\n  }\r\n\r\n  \u002F* Optional: stack vertically on narrow screens *\u002F\r\n  @media (max-width: 850px) {\r\n    .audio-container {\r\n      flex-direction: column;\r\n      align-items: center;\r\n    }\r\n    .audio-box {\r\n      min-width: 80%;\r\n    }\r\n  }\r\n\u003C\u002Fstyle\u003E\r\n\r\n\u003Ch2\u003E# Trial Example\u003C\u002Fh2\u003E\r\n\r\n\u003Cdiv class=\"audio-container\"\u003E\r\n  \u003Cdiv class=\"audio-box\"\u003E\r\n    \u003Ch3\u003EAudio A\u003C\u002Fh3\u003E\r\n    \u003Ciframe \r\n      allow=\"autoplay\"\r\n      scrolling=\"no\"\r\n      src=\"https:\u002F\u002Fw.soundcloud.com\u002Fplayer\u002F?url=https%3A\u002F\u002Fapi.soundcloud.com\u002Ftracks\u002Fsoundcloud%253Atracks%253A2204558727&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=false&show_reposts=false&show_teaser=true\"\u003E\r\n    \u003C\u002Fiframe\u003E\r\n  \u003C\u002Fdiv\u003E\r\n\r\n  \u003Cdiv class=\"audio-box\"\u003E\r\n    \u003Ch3\u003EAudio B\u003C\u002Fh3\u003E\r\n    \u003Ciframe \r\n      allow=\"autoplay\"\r\n      scrolling=\"no\"\r\n      src=\"https:\u002F\u002Fw.soundcloud.com\u002Fplayer\u002F?url=https%3A\u002F\u002Fapi.soundcloud.com\u002Ftracks\u002Fsoundcloud%253Atracks%253A2208296891&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true\"\u003E\r\n    \u003C\u002Fiframe\u003E\r\n  \u003C\u002Fdiv\u003E\r\n\u003C\u002Fdiv\u003E\r\n",
          "name": ""
        },
        {
          "required": true,
          "type": "text",
          "title": "Audio B contains the noise. Please set a listening volume at which you can distinguish between Audio A and Audio B."
        },
        {
          "required": true,
          "type": "divider"
        },
        {
          "required": true,
          "type": "html",
          "content": "\u003Cstyle\u003E\r\n  .audio-container {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: flex-start;\r\n    gap: 30px;\r\n    flex-wrap: nowrap;\r\n    margin: 20px auto;\r\n    max-width: 1000px;\r\n  }\r\n  .audio-box {\r\n    flex: 1;\r\n    min-width: 400px;\r\n    background: #f9fafc;\r\n    border: 1px solid #ddd;\r\n    border-radius: 10px;\r\n    padding: 10px 15px;\r\n    box-shadow: 0 1px 5px rgba(0,0,0,0.08);\r\n  }\r\n  .audio-box h3 {\r\n    text-align: center;\r\n    color: #1e3a8a;\r\n    margin-bottom: 8px;\r\n  }\r\n  iframe {\r\n    width: 100%;\r\n    height: 166px;\r\n    border: none;\r\n    border-radius: 8px;\r\n  }\r\n\r\n  \u002F* Optional: stack vertically on narrow screens *\u002F\r\n  @media (max-width: 850px) {\r\n    .audio-container {\r\n      flex-direction: column;\r\n      align-items: center;\r\n    }\r\n    .audio-box {\r\n      min-width: 80%;\r\n    }\r\n  }\r\n\u003C\u002Fstyle\u003E\r\n\r\n\u003Ch2\u003E# Trial 1\u003C\u002Fh2\u003E\r\n\r\n\u003Cdiv class=\"audio-container\"\u003E\r\n  \u003Cdiv class=\"audio-box\"\u003E\r\n    \u003Ch3\u003EAudio A\u003C\u002Fh3\u003E\r\n    \u003Ciframe \r\n      allow=\"autoplay\"\r\n      scrolling=\"no\"\r\n      src=\"https:\u002F\u002Fw.soundcloud.com\u002Fplayer\u002F?url=https%3A\u002F\u002Fapi.soundcloud.com\u002Ftracks\u002Fsoundcloud%253Atracks%253A2204432015&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=false&show_reposts=false&show_teaser=true\"\u003E\r\n    \u003C\u002Fiframe\u003E\r\n  \u003C\u002Fdiv\u003E\r\n\r\n  \u003Cdiv class=\"audio-box\"\u003E\r\n    \u003Ch3\u003EAudio B\u003C\u002Fh3\u003E\r\n    \u003Ciframe \r\n      allow=\"autoplay\"\r\n      scrolling=\"no\"\r\n      src=\"https:\u002F\u002Fw.soundcloud.com\u002Fplayer\u002F?url=https%3A\u002F\u002Fapi.soundcloud.com\u002Ftracks\u002Fsoundcloud%253Atracks%253A2204558719&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=false&show_reposts=false&show_teaser=true\"\u003E\r\n    \u003C\u002Fiframe\u003E\r\n  \u003C\u002Fdiv\u003E\r\n\u003C\u002Fdiv\u003E\r\n",
          "name": ""
        },
        {
          "required": true,
          "type": "radio",
          "label": "How noticeable the noise is?",
          "options": [
            {
              "label": "1 = No noise (A=B) or Unnoticeable noise",
              "coding": "1"
            },
            {
              "label": "2 = Slightly",
              "coding": "2"
            },
            {
              "label": "3 = Moderately",
              "coding": "3"
            },
            {
              "label": "4 = Very",
              "coding": "4"
            },
            {
              "label": "5 = Extremely",
              "coding": "5"
            }
          ],
          "name": "rate_1"
        },
        {
          "required": true,
          "type": "radio",
          "label": "Which contains the noise?",
          "options": [
            {
              "label": "Not applicable or cannot be perceived",
              "coding": "C"
            },
            {
              "label": "A",
              "coding": "A"
            },
            {
              "label": "B",
              "coding": "B"
            }
          ],
          "help": "",
          "name": "pick_1"
        },
        {
          "required": true,
          "type": "divider"
        },
        {
          "required": true,
          "type": "html",
          "content": "\u003Cstyle\u003E\r\n  .audio-container {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: flex-start;\r\n    gap: 30px;\r\n    flex-wrap: nowrap;\r\n    margin: 20px auto;\r\n    max-width: 1000px;\r\n  }\r\n  .audio-box {\r\n    flex: 1;\r\n    min-width: 400px;\r\n    background: #f9fafc;\r\n    border: 1px solid #ddd;\r\n    border-radius: 10px;\r\n    padding: 10px 15px;\r\n    box-shadow: 0 1px 5px rgba(0,0,0,0.08);\r\n  }\r\n  .audio-box h3 {\r\n    text-align: center;\r\n    color: #1e3a8a;\r\n    margin-bottom: 8px;\r\n  }\r\n  iframe {\r\n    width: 100%;\r\n    height: 166px;\r\n    border: none;\r\n    border-radius: 8px;\r\n  }\r\n\r\n  \u002F* Optional: stack vertically on narrow screens *\u002F\r\n  @media (max-width: 850px) {\r\n    .audio-container {\r\n      flex-direction: column;\r\n      align-items: center;\r\n    }\r\n    .audio-box {\r\n      min-width: 80%;\r\n    }\r\n  }\r\n\u003C\u002Fstyle\u003E\r\n\r\n\u003Ch2\u003E# Trial 2\u003C\u002Fh2\u003E\r\n\r\n\u003Cdiv class=\"audio-container\"\u003E\r\n  \u003Cdiv class=\"audio-box\"\u003E\r\n    \u003Ch3\u003EAudio A\u003C\u002Fh3\u003E\r\n    \u003Ciframe \r\n      allow=\"autoplay\"\r\n      scrolling=\"no\"\r\n      src=\"https:\u002F\u002Fw.soundcloud.com\u002Fplayer\u002F?url=https%3A\u002F\u002Fapi.soundcloud.com\u002Ftracks\u002Fsoundcloud%253Atracks%253A2204558739&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=false&show_reposts=false&show_teaser=true\"\u003E\r\n    \u003C\u002Fiframe\u003E\r\n  \u003C\u002Fdiv\u003E\r\n\r\n  \u003Cdiv class=\"audio-box\"\u003E\r\n    \u003Ch3\u003EAudio B\u003C\u002Fh3\u003E\r\n    \u003Ciframe \r\n      allow=\"autoplay\"\r\n      scrolling=\"no\"\r\n      src=\"https:\u002F\u002Fw.soundcloud.com\u002Fplayer\u002F?url=https%3A\u002F\u002Fapi.soundcloud.com\u002Ftracks\u002Fsoundcloud%253Atracks%253A2204431987&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=false&show_reposts=false&show_teaser=true\"\u003E\r\n    \u003C\u002Fiframe\u003E\r\n  \u003C\u002Fdiv\u003E\r\n\u003C\u002Fdiv\u003E\r\n",
          "name": ""
        },
        {
          "required": true,
          "type": "radio",
          "label": "How noticeable the noise is?",
          "options": [
            {
              "label": "1 = No noise (A=B) or Unnoticeable noise",
              "coding": "1"
            },
            {
              "label": "2 = Slightly",
              "coding": "2"
            },
            {
              "label": "3 = Moderately",
              "coding": "3"
            },
            {
              "label": "4 = Very",
              "coding": "4"
            },
            {
              "label": "5 = Extremely",
              "coding": "5"
            }
          ],
          "name": "rate_2"
        },
        {
          "required": true,
          "type": "radio",
          "label": "Which contains the noise?",
          "options": [
            {
              "label": "Not applicable or cannot be perceived",
              "coding": "C"
            },
            {
              "label": "A",
              "coding": "A"
            },
            {
              "label": "B",
              "coding": "B"
            }
          ],
          "help": "",
          "name": "pick_2"
        },
        {
          "required": true,
          "type": "divider"
        },
        {
          "required": true,
          "type": "html",
          "content": "\u003Cstyle\u003E\r\n  .audio-container {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: flex-start;\r\n    gap: 30px;\r\n    flex-wrap: nowrap;\r\n    margin: 20px auto;\r\n    max-width: 1000px;\r\n  }\r\n  .audio-box {\r\n    flex: 1;\r\n    min-width: 400px;\r\n    background: #f9fafc;\r\n    border: 1px solid #ddd;\r\n    border-radius: 10px;\r\n    padding: 10px 15px;\r\n    box-shadow: 0 1px 5px rgba(0,0,0,0.08);\r\n  }\r\n  .audio-box h3 {\r\n    text-align: center;\r\n    color: #1e3a8a;\r\n    margin-bottom: 8px;\r\n  }\r\n  iframe {\r\n    width: 100%;\r\n    height: 166px;\r\n    border: none;\r\n    border-radius: 8px;\r\n  }\r\n\r\n  \u002F* Optional: stack vertically on narrow screens *\u002F\r\n  @media (max-width: 850px) {\r\n    .audio-container {\r\n      flex-direction: column;\r\n      align-items: center;\r\n    }\r\n    .audio-box {\r\n      min-width: 80%;\r\n    }\r\n  }\r\n\u003C\u002Fstyle\u003E\r\n\r\n\u003Ch2\u003E# Trial 3\u003C\u002Fh2\u003E\r\n\r\n\u003Cdiv class=\"audio-container\"\u003E\r\n  \u003Cdiv class=\"audio-box\"\u003E\r\n    \u003Ch3\u003EAudio A\u003C\u002Fh3\u003E\r\n    \u003Ciframe \r\n      allow=\"autoplay\"\r\n      scrolling=\"no\"\r\n      src=\"https:\u002F\u002Fw.soundcloud.com\u002Fplayer\u002F?url=https%3A\u002F\u002Fapi.soundcloud.com\u002Ftracks\u002Fsoundcloud%253Atracks%253A2204431999&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=false&show_reposts=false&show_teaser=true\"\u003E\r\n    \u003C\u002Fiframe\u003E\r\n  \u003C\u002Fdiv\u003E\r\n\r\n  \u003Cdiv class=\"audio-box\"\u003E\r\n    \u003Ch3\u003EAudio B\u003C\u002Fh3\u003E\r\n    \u003Ciframe \r\n      allow=\"autoplay\"\r\n      scrolling=\"no\"\r\n      src=\"https:\u002F\u002Fw.soundcloud.com\u002Fplayer\u002F?url=https%3A\u002F\u002Fapi.soundcloud.com\u002Ftracks\u002Fsoundcloud%253Atracks%253A2204558767&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=false&show_reposts=false&show_teaser=true\"\u003E\r\n    \u003C\u002Fiframe\u003E\r\n  \u003C\u002Fdiv\u003E\r\n\u003C\u002Fdiv\u003E\r\n",
          "name": ""
        },
        {
          "required": true,
          "type": "radio",
          "label": "How noticeable the noise is?",
          "options": [
            {
              "label": "1 = No noise (A=B) or Unnoticeable noise",
              "coding": "1"
            },
            {
              "label": "2 = Slightly",
              "coding": "2"
            },
            {
              "label": "3 = Moderately",
              "coding": "3"
            },
            {
              "label": "4 = Very",
              "coding": "4"
            },
            {
              "label": "5 = Extremely",
              "coding": "5"
            }
          ],
          "name": "rate_3"
        },
        {
          "required": true,
          "type": "radio",
          "label": "Which contains the noise?",
          "options": [
            {
              "label": "Not applicable or cannot be perceived",
              "coding": "C"
            },
            {
              "label": "A",
              "coding": "A"
            },
            {
              "label": "B",
              "coding": "B"
            }
          ],
          "help": "",
          "name": "pick_3"
        },
        {
          "required": true,
          "type": "divider"
        },
        {
          "required": true,
          "type": "html",
          "content": "\u003Cstyle\u003E\r\n  .audio-container {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: flex-start;\r\n    gap: 30px;\r\n    flex-wrap: nowrap;\r\n    margin: 20px auto;\r\n    max-width: 1000px;\r\n  }\r\n  .audio-box {\r\n    flex: 1;\r\n    min-width: 400px;\r\n    background: #f9fafc;\r\n    border: 1px solid #ddd;\r\n    border-radius: 10px;\r\n    padding: 10px 15px;\r\n    box-shadow: 0 1px 5px rgba(0,0,0,0.08);\r\n  }\r\n  .audio-box h3 {\r\n    text-align: center;\r\n    color: #1e3a8a;\r\n    margin-bottom: 8px;\r\n  }\r\n  iframe {\r\n    width: 100%;\r\n    height: 166px;\r\n    border: none;\r\n    border-radius: 8px;\r\n  }\r\n\r\n  \u002F* Optional: stack vertically on narrow screens *\u002F\r\n  @media (max-width: 850px) {\r\n    .audio-container {\r\n      flex-direction: column;\r\n      align-items: center;\r\n    }\r\n    .audio-box {\r\n      min-width: 80%;\r\n    }\r\n  }\r\n\u003C\u002Fstyle\u003E\r\n\r\n\u003Ch2\u003E# Trial 4\u003C\u002Fh2\u003E\r\n\r\n\u003Cdiv class=\"audio-container\"\u003E\r\n  \u003Cdiv class=\"audio-box\"\u003E\r\n    \u003Ch3\u003EAudio A\u003C\u002Fh3\u003E\r\n    \u003Ciframe \r\n      allow=\"autoplay\"\r\n      scrolling=\"no\"\r\n      src=\"https:\u002F\u002Fw.soundcloud.com\u002Fplayer\u002F?url=https%3A\u002F\u002Fapi.soundcloud.com\u002Ftracks\u002Fsoundcloud%253Atracks%253A2204558711&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=false&show_reposts=false&show_teaser=true\"\u003E\r\n    \u003C\u002Fiframe\u003E\r\n  \u003C\u002Fdiv\u003E\r\n\r\n  \u003Cdiv class=\"audio-box\"\u003E\r\n    \u003Ch3\u003EAudio B\u003C\u002Fh3\u003E\r\n    \u003Ciframe \r\n      allow=\"autoplay\"\r\n      scrolling=\"no\"\r\n      src=\"https:\u002F\u002Fw.soundcloud.com\u002Fplayer\u002F?url=https%3A\u002F\u002Fapi.soundcloud.com\u002Ftracks\u002Fsoundcloud%253Atracks%253A2204431959&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=false&show_reposts=false&show_teaser=true\"\u003E\r\n    \u003C\u002Fiframe\u003E\r\n  \u003C\u002Fdiv\u003E\r\n\u003C\u002Fdiv\u003E\r\n",
          "name": ""
        },
        {
          "required": true,
          "type": "radio",
          "label": "How noticeable the noise is?",
          "options": [
            {
              "label": "1 = No noise (A=B) or Unnoticeable noise",
              "coding": "1"
            },
            {
              "label": "2 = Slightly",
              "coding": "2"
            },
            {
              "label": "3 = Moderately",
              "coding": "3"
            },
            {
              "label": "4 = Very",
              "coding": "4"
            },
            {
              "label": "5 = Extremely",
              "coding": "5"
            }
          ],
          "name": "rate_4"
        },
        {
          "required": true,
          "type": "radio",
          "label": "Which contains the noise?",
          "options": [
            {
              "label": "Not applicable or cannot be perceived",
              "coding": "C"
            },
            {
              "label": "A",
              "coding": "A"
            },
            {
              "label": "B",
              "coding": "B"
            }
          ],
          "help": "",
          "name": "pick_4"
        },
        {
          "required": true,
          "type": "divider"
        },
        {
          "required": true,
          "type": "html",
          "content": "\u003Cstyle\u003E\r\n  .audio-container {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: flex-start;\r\n    gap: 30px;\r\n    flex-wrap: nowrap;\r\n    margin: 20px auto;\r\n    max-width: 1000px;\r\n  }\r\n  .audio-box {\r\n    flex: 1;\r\n    min-width: 400px;\r\n    background: #f9fafc;\r\n    border: 1px solid #ddd;\r\n    border-radius: 10px;\r\n    padding: 10px 15px;\r\n    box-shadow: 0 1px 5px rgba(0,0,0,0.08);\r\n  }\r\n  .audio-box h3 {\r\n    text-align: center;\r\n    color: #1e3a8a;\r\n    margin-bottom: 8px;\r\n  }\r\n  iframe {\r\n    width: 100%;\r\n    height: 166px;\r\n    border: none;\r\n    border-radius: 8px;\r\n  }\r\n\r\n  \u002F* Optional: stack vertically on narrow screens *\u002F\r\n  @media (max-width: 850px) {\r\n    .audio-container {\r\n      flex-direction: column;\r\n      align-items: center;\r\n    }\r\n    .audio-box {\r\n      min-width: 80%;\r\n    }\r\n  }\r\n\u003C\u002Fstyle\u003E\r\n\r\n\u003Ch2\u003E# Trial 5\u003C\u002Fh2\u003E\r\n\r\n\u003Cdiv class=\"audio-container\"\u003E\r\n  \u003Cdiv class=\"audio-box\"\u003E\r\n    \u003Ch3\u003EAudio A\u003C\u002Fh3\u003E\r\n    \u003Ciframe \r\n      allow=\"autoplay\"\r\n      scrolling=\"no\"\r\n      src=\"https:\u002F\u002Fw.soundcloud.com\u002Fplayer\u002F?url=https%3A\u002F\u002Fapi.soundcloud.com\u002Ftracks\u002Fsoundcloud%253Atracks%253A2204432027&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=false&show_reposts=false&show_teaser=true\"\u003E\r\n    \u003C\u002Fiframe\u003E\r\n  \u003C\u002Fdiv\u003E\r\n\r\n  \u003Cdiv class=\"audio-box\"\u003E\r\n    \u003Ch3\u003EAudio B\u003C\u002Fh3\u003E\r\n    \u003Ciframe \r\n      allow=\"autoplay\"\r\n      scrolling=\"no\"\r\n      src=\"https:\u002F\u002Fw.soundcloud.com\u002Fplayer\u002F?url=https%3A\u002F\u002Fapi.soundcloud.com\u002Ftracks\u002Fsoundcloud%253Atracks%253A2204558723&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=false&show_reposts=false&show_teaser=true\"\u003E\r\n    \u003C\u002Fiframe\u003E\r\n  \u003C\u002Fdiv\u003E\r\n\u003C\u002Fdiv\u003E\r\n",
          "name": ""
        },
        {
          "required": true,
          "type": "radio",
          "label": "How noticeable the noise is?",
          "options": [
            {
              "label": "1 = No noise (A=B) or Unnoticeable noise",
              "coding": "1"
            },
            {
              "label": "2 = Slightly",
              "coding": "2"
            },
            {
              "label": "3 = Moderately",
              "coding": "3"
            },
            {
              "label": "4 = Very",
              "coding": "4"
            },
            {
              "label": "5 = Extremely",
              "coding": "5"
            }
          ],
          "name": "rate_5"
        },
        {
          "required": true,
          "type": "radio",
          "label": "Which contains the noise?",
          "options": [
            {
              "label": "Not applicable or cannot be perceived",
              "coding": "C"
            },
            {
              "label": "A",
              "coding": "A"
            },
            {
              "label": "B",
              "coding": "B"
            }
          ],
          "help": "",
          "name": "pick_5"
        },
        {
          "required": true,
          "type": "divider"
        },
        {
          "required": true,
          "type": "html",
          "content": "\u003Cstyle\u003E\r\n  .audio-container {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: flex-start;\r\n    gap: 30px;\r\n    flex-wrap: nowrap;\r\n    margin: 20px auto;\r\n    max-width: 1000px;\r\n  }\r\n  .audio-box {\r\n    flex: 1;\r\n    min-width: 400px;\r\n    background: #f9fafc;\r\n    border: 1px solid #ddd;\r\n    border-radius: 10px;\r\n    padding: 10px 15px;\r\n    box-shadow: 0 1px 5px rgba(0,0,0,0.08);\r\n  }\r\n  .audio-box h3 {\r\n    text-align: center;\r\n    color: #1e3a8a;\r\n    margin-bottom: 8px;\r\n  }\r\n  iframe {\r\n    width: 100%;\r\n    height: 166px;\r\n    border: none;\r\n    border-radius: 8px;\r\n  }\r\n\r\n  \u002F* Optional: stack vertically on narrow screens *\u002F\r\n  @media (max-width: 850px) {\r\n    .audio-container {\r\n      flex-direction: column;\r\n      align-items: center;\r\n    }\r\n    .audio-box {\r\n      min-width: 80%;\r\n    }\r\n  }\r\n\u003C\u002Fstyle\u003E\r\n\r\n\u003Ch2\u003E# Trial 6\u003C\u002Fh2\u003E\r\n\r\n\u003Cdiv class=\"audio-container\"\u003E\r\n  \u003Cdiv class=\"audio-box\"\u003E\r\n    \u003Ch3\u003EAudio A\u003C\u002Fh3\u003E\r\n    \u003Ciframe \r\n      allow=\"autoplay\"\r\n      scrolling=\"no\"\r\n      src=\"https:\u002F\u002Fw.soundcloud.com\u002Fplayer\u002F?url=https%3A\u002F\u002Fapi.soundcloud.com\u002Ftracks\u002Fsoundcloud%253Atracks%253A2204649499&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=false&show_reposts=false&show_teaser=true\"\u003E\r\n    \u003C\u002Fiframe\u003E\r\n  \u003C\u002Fdiv\u003E\r\n\r\n  \u003Cdiv class=\"audio-box\"\u003E\r\n    \u003Ch3\u003EAudio B\u003C\u002Fh3\u003E\r\n    \u003Ciframe \r\n      allow=\"autoplay\"\r\n      scrolling=\"no\"\r\n      src=\"https:\u002F\u002Fw.soundcloud.com\u002Fplayer\u002F?url=https%3A\u002F\u002Fapi.soundcloud.com\u002Ftracks\u002Fsoundcloud%253Atracks%253A2204649499&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=false&show_reposts=false&show_teaser=true\"\u003E\r\n    \u003C\u002Fiframe\u003E\r\n  \u003C\u002Fdiv\u003E\r\n\u003C\u002Fdiv\u003E\r\n",
          "name": ""
        },
        {
          "required": true,
          "type": "radio",
          "label": "How noticeable the noise is?",
          "options": [
            {
              "label": "1 = No noise (A=B) or Unnoticeable noise",
              "coding": "1"
            },
            {
              "label": "2 = Slightly",
              "coding": "2"
            },
            {
              "label": "3 = Moderately",
              "coding": "3"
            },
            {
              "label": "4 = Very",
              "coding": "4"
            },
            {
              "label": "5 = Extremely",
              "coding": "5"
            }
          ],
          "name": "rate_6"
        },
        {
          "required": true,
          "type": "radio",
          "label": "Which contains the noise?",
          "options": [
            {
              "label": "Not applicable or cannot be perceived",
              "coding": "C"
            },
            {
              "label": "A",
              "coding": "A"
            },
            {
              "label": "B",
              "coding": "B"
            }
          ],
          "help": "",
          "name": "pick_6"
        },
        {
          "required": true,
          "type": "divider"
        },
        {
          "required": true,
          "type": "html",
          "content": "\u003Cstyle\u003E\r\n  .audio-container {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: flex-start;\r\n    gap: 30px;\r\n    flex-wrap: nowrap;\r\n    margin: 20px auto;\r\n    max-width: 1000px;\r\n  }\r\n  .audio-box {\r\n    flex: 1;\r\n    min-width: 400px;\r\n    background: #f9fafc;\r\n    border: 1px solid #ddd;\r\n    border-radius: 10px;\r\n    padding: 10px 15px;\r\n    box-shadow: 0 1px 5px rgba(0,0,0,0.08);\r\n  }\r\n  .audio-box h3 {\r\n    text-align: center;\r\n    color: #1e3a8a;\r\n    margin-bottom: 8px;\r\n  }\r\n  iframe {\r\n    width: 100%;\r\n    height: 166px;\r\n    border: none;\r\n    border-radius: 8px;\r\n  }\r\n\r\n  \u002F* Optional: stack vertically on narrow screens *\u002F\r\n  @media (max-width: 850px) {\r\n    .audio-container {\r\n      flex-direction: column;\r\n      align-items: center;\r\n    }\r\n    .audio-box {\r\n      min-width: 80%;\r\n    }\r\n  }\r\n\u003C\u002Fstyle\u003E\r\n\r\n\u003Ch2\u003E# Trial 7\u003C\u002Fh2\u003E\r\n\r\n\u003Cdiv class=\"audio-container\"\u003E\r\n  \u003Cdiv class=\"audio-box\"\u003E\r\n    \u003Ch3\u003EAudio A\u003C\u002Fh3\u003E\r\n    \u003Ciframe \r\n      allow=\"autoplay\"\r\n      scrolling=\"no\"\r\n      src=\"https:\u002F\u002Fw.soundcloud.com\u002Fplayer\u002F?url=https%3A\u002F\u002Fapi.soundcloud.com\u002Ftracks\u002Fsoundcloud%253Atracks%253A2204558771&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=false&show_reposts=false&show_teaser=true\"\u003E\r\n    \u003C\u002Fiframe\u003E\r\n  \u003C\u002Fdiv\u003E\r\n\r\n  \u003Cdiv class=\"audio-box\"\u003E\r\n    \u003Ch3\u003EAudio B\u003C\u002Fh3\u003E\r\n    \u003Ciframe \r\n      allow=\"autoplay\"\r\n      scrolling=\"no\"\r\n      src=\"https:\u002F\u002Fw.soundcloud.com\u002Fplayer\u002F?url=https%3A\u002F\u002Fapi.soundcloud.com\u002Ftracks\u002Fsoundcloud%253Atracks%253A2204432023&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=false&show_reposts=false&show_teaser=true\"\u003E\r\n    \u003C\u002Fiframe\u003E\r\n  \u003C\u002Fdiv\u003E\r\n\u003C\u002Fdiv\u003E\r\n",
          "name": ""
        },
        {
          "required": true,
          "type": "radio",
          "label": "How noticeable the noise is?",
          "options": [
            {
              "label": "1 = No noise (A=B) or Unnoticeable noise",
              "coding": "1"
            },
            {
              "label": "2 = Slightly",
              "coding": "2"
            },
            {
              "label": "3 = Moderately",
              "coding": "3"
            },
            {
              "label": "4 = Very",
              "coding": "4"
            },
            {
              "label": "5 = Extremely",
              "coding": "5"
            }
          ],
          "name": "rate_7"
        },
        {
          "required": true,
          "type": "radio",
          "label": "Which contains the noise?",
          "options": [
            {
              "label": "Not applicable or cannot be perceived",
              "coding": "C"
            },
            {
              "label": "A",
              "coding": "A"
            },
            {
              "label": "B",
              "coding": "B"
            }
          ],
          "help": "",
          "name": "pick_7"
        },
        {
          "required": true,
          "type": "divider"
        },
        {
          "required": true,
          "type": "html",
          "content": "\u003Cstyle\u003E\r\n  .audio-container {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: flex-start;\r\n    gap: 30px;\r\n    flex-wrap: nowrap;\r\n    margin: 20px auto;\r\n    max-width: 1000px;\r\n  }\r\n  .audio-box {\r\n    flex: 1;\r\n    min-width: 400px;\r\n    background: #f9fafc;\r\n    border: 1px solid #ddd;\r\n    border-radius: 10px;\r\n    padding: 10px 15px;\r\n    box-shadow: 0 1px 5px rgba(0,0,0,0.08);\r\n  }\r\n  .audio-box h3 {\r\n    text-align: center;\r\n    color: #1e3a8a;\r\n    margin-bottom: 8px;\r\n  }\r\n  iframe {\r\n    width: 100%;\r\n    height: 166px;\r\n    border: none;\r\n    border-radius: 8px;\r\n  }\r\n\r\n  \u002F* Optional: stack vertically on narrow screens *\u002F\r\n  @media (max-width: 850px) {\r\n    .audio-container {\r\n      flex-direction: column;\r\n      align-items: center;\r\n    }\r\n    .audio-box {\r\n      min-width: 80%;\r\n    }\r\n  }\r\n\u003C\u002Fstyle\u003E\r\n\r\n\u003Ch2\u003E# Trial 8\u003C\u002Fh2\u003E\r\n\r\n\u003Cdiv class=\"audio-container\"\u003E\r\n  \u003Cdiv class=\"audio-box\"\u003E\r\n    \u003Ch3\u003EAudio A\u003C\u002Fh3\u003E\r\n    \u003Ciframe \r\n      allow=\"autoplay\"\r\n      scrolling=\"no\"\r\n      src=\"https:\u002F\u002Fw.soundcloud.com\u002Fplayer\u002F?url=https%3A\u002F\u002Fapi.soundcloud.com\u002Ftracks\u002Fsoundcloud%253Atracks%253A2204432007&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=false&show_reposts=false&show_teaser=true\"\u003E\r\n    \u003C\u002Fiframe\u003E\r\n  \u003C\u002Fdiv\u003E\r\n\r\n  \u003Cdiv class=\"audio-box\"\u003E\r\n    \u003Ch3\u003EAudio B\u003C\u002Fh3\u003E\r\n    \u003Ciframe \r\n      allow=\"autoplay\"\r\n      scrolling=\"no\"\r\n      src=\"https:\u002F\u002Fw.soundcloud.com\u002Fplayer\u002F?url=https%3A\u002F\u002Fapi.soundcloud.com\u002Ftracks\u002Fsoundcloud%253Atracks%253A2204558763&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=false&show_reposts=false&show_teaser=true\"\u003E\r\n    \u003C\u002Fiframe\u003E\r\n  \u003C\u002Fdiv\u003E\r\n\u003C\u002Fdiv\u003E\r\n",
          "name": ""
        },
        {
          "required": true,
          "type": "radio",
          "label": "How noticeable the noise is?",
          "options": [
            {
              "label": "1 = No noise (A=B) or Unnoticeable noise",
              "coding": "1"
            },
            {
              "label": "2 = Slightly",
              "coding": "2"
            },
            {
              "label": "3 = Moderately",
              "coding": "3"
            },
            {
              "label": "4 = Very",
              "coding": "4"
            },
            {
              "label": "5 = Extremely",
              "coding": "5"
            }
          ],
          "name": "rate_8"
        },
        {
          "required": true,
          "type": "radio",
          "label": "Which contains the noise?",
          "options": [
            {
              "label": "Not applicable or cannot be perceived",
              "coding": "C"
            },
            {
              "label": "A",
              "coding": "A"
            },
            {
              "label": "B",
              "coding": "B"
            }
          ],
          "help": "",
          "name": "pick_8"
        },
        {
          "required": true,
          "type": "divider"
        },
        {
          "required": true,
          "type": "html",
          "content": "\u003Cstyle\u003E\r\n  .audio-container {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: flex-start;\r\n    gap: 30px;\r\n    flex-wrap: nowrap;\r\n    margin: 20px auto;\r\n    max-width: 1000px;\r\n  }\r\n  .audio-box {\r\n    flex: 1;\r\n    min-width: 400px;\r\n    background: #f9fafc;\r\n    border: 1px solid #ddd;\r\n    border-radius: 10px;\r\n    padding: 10px 15px;\r\n    box-shadow: 0 1px 5px rgba(0,0,0,0.08);\r\n  }\r\n  .audio-box h3 {\r\n    text-align: center;\r\n    color: #1e3a8a;\r\n    margin-bottom: 8px;\r\n  }\r\n  iframe {\r\n    width: 100%;\r\n    height: 166px;\r\n    border: none;\r\n    border-radius: 8px;\r\n  }\r\n\r\n  \u002F* Optional: stack vertically on narrow screens *\u002F\r\n  @media (max-width: 850px) {\r\n    .audio-container {\r\n      flex-direction: column;\r\n      align-items: center;\r\n    }\r\n    .audio-box {\r\n      min-width: 80%;\r\n    }\r\n  }\r\n\u003C\u002Fstyle\u003E\r\n\r\n\u003Ch2\u003E# Trial 9\u003C\u002Fh2\u003E\r\n\r\n\u003Cdiv class=\"audio-container\"\u003E\r\n  \u003Cdiv class=\"audio-box\"\u003E\r\n    \u003Ch3\u003EAudio A\u003C\u002Fh3\u003E\r\n    \u003Ciframe \r\n      allow=\"autoplay\"\r\n      scrolling=\"no\"\r\n      src=\"https:\u002F\u002Fw.soundcloud.com\u002Fplayer\u002F?url=https%3A\u002F\u002Fapi.soundcloud.com\u002Ftracks\u002Fsoundcloud%253Atracks%253A2204558747&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=false&show_reposts=false&show_teaser=true\"\u003E\r\n    \u003C\u002Fiframe\u003E\r\n  \u003C\u002Fdiv\u003E\r\n\r\n  \u003Cdiv class=\"audio-box\"\u003E\r\n    \u003Ch3\u003EAudio B\u003C\u002Fh3\u003E\r\n    \u003Ciframe \r\n      allow=\"autoplay\"\r\n      scrolling=\"no\"\r\n      src=\"https:\u002F\u002Fw.soundcloud.com\u002Fplayer\u002F?url=https%3A\u002F\u002Fapi.soundcloud.com\u002Ftracks\u002Fsoundcloud%253Atracks%253A2204431971&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=false&show_reposts=false&show_teaser=true\"\u003E\r\n    \u003C\u002Fiframe\u003E\r\n  \u003C\u002Fdiv\u003E\r\n\u003C\u002Fdiv\u003E\r\n",
          "name": ""
        },
        {
          "required": true,
          "type": "radio",
          "label": "How noticeable the noise is?",
          "options": [
            {
              "label": "1 = No noise (A=B) or Unnoticeable noise",
              "coding": "1"
            },
            {
              "label": "2 = Slightly",
              "coding": "2"
            },
            {
              "label": "3 = Moderately",
              "coding": "3"
            },
            {
              "label": "4 = Very",
              "coding": "4"
            },
            {
              "label": "5 = Extremely",
              "coding": "5"
            }
          ],
          "name": "rate_9"
        },
        {
          "required": true,
          "type": "radio",
          "label": "Which contains the noise?",
          "options": [
            {
              "label": "Not applicable or cannot be perceived",
              "coding": "C"
            },
            {
              "label": "A",
              "coding": "A"
            },
            {
              "label": "B",
              "coding": "B"
            }
          ],
          "help": "",
          "name": "pick_9"
        },
        {
          "required": true,
          "type": "divider"
        },
        {
          "required": true,
          "type": "html",
          "content": "\u003Cstyle\u003E\r\n  .audio-container {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: flex-start;\r\n    gap: 30px;\r\n    flex-wrap: nowrap;\r\n    margin: 20px auto;\r\n    max-width: 1000px;\r\n  }\r\n  .audio-box {\r\n    flex: 1;\r\n    min-width: 400px;\r\n    background: #f9fafc;\r\n    border: 1px solid #ddd;\r\n    border-radius: 10px;\r\n    padding: 10px 15px;\r\n    box-shadow: 0 1px 5px rgba(0,0,0,0.08);\r\n  }\r\n  .audio-box h3 {\r\n    text-align: center;\r\n    color: #1e3a8a;\r\n    margin-bottom: 8px;\r\n  }\r\n  iframe {\r\n    width: 100%;\r\n    height: 166px;\r\n    border: none;\r\n    border-radius: 8px;\r\n  }\r\n\r\n  \u002F* Optional: stack vertically on narrow screens *\u002F\r\n  @media (max-width: 850px) {\r\n    .audio-container {\r\n      flex-direction: column;\r\n      align-items: center;\r\n    }\r\n    .audio-box {\r\n      min-width: 80%;\r\n    }\r\n  }\r\n\u003C\u002Fstyle\u003E\r\n\r\n\u003Ch2\u003E# Trial 10\u003C\u002Fh2\u003E\r\n\r\n\u003Cdiv class=\"audio-container\"\u003E\r\n  \u003Cdiv class=\"audio-box\"\u003E\r\n    \u003Ch3\u003EAudio A\u003C\u002Fh3\u003E\r\n    \u003Ciframe \r\n      allow=\"autoplay\"\r\n      scrolling=\"no\"\r\n      src=\"https:\u002F\u002Fw.soundcloud.com\u002Fplayer\u002F?url=https%3A\u002F\u002Fapi.soundcloud.com\u002Ftracks\u002Fsoundcloud%253Atracks%253A2204558755&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=false&show_reposts=false&show_teaser=true\"\u003E\r\n    \u003C\u002Fiframe\u003E\r\n  \u003C\u002Fdiv\u003E\r\n\r\n  \u003Cdiv class=\"audio-box\"\u003E\r\n    \u003Ch3\u003EAudio B\u003C\u002Fh3\u003E\r\n    \u003Ciframe \r\n      allow=\"autoplay\"\r\n      scrolling=\"no\"\r\n      src=\"https:\u002F\u002Fw.soundcloud.com\u002Fplayer\u002F?url=https%3A\u002F\u002Fapi.soundcloud.com\u002Ftracks\u002Fsoundcloud%253Atracks%253A2204431983&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=false&show_reposts=false&show_teaser=true\"\u003E\r\n    \u003C\u002Fiframe\u003E\r\n  \u003C\u002Fdiv\u003E\r\n\u003C\u002Fdiv\u003E\r\n",
          "name": ""
        },
        {
          "required": true,
          "type": "radio",
          "label": "How noticeable the noise is?",
          "options": [
            {
              "label": "1 = No noise (A=B) or Unnoticeable noise",
              "coding": "1"
            },
            {
              "label": "2 = Slightly",
              "coding": "2"
            },
            {
              "label": "3 = Moderately",
              "coding": "3"
            },
            {
              "label": "4 = Very",
              "coding": "4"
            },
            {
              "label": "5 = Extremely",
              "coding": "5"
            }
          ],
          "name": "rate_10"
        },
        {
          "required": true,
          "type": "radio",
          "label": "Which contains the noise?",
          "options": [
            {
              "label": "Not applicable or cannot be perceived",
              "coding": "C"
            },
            {
              "label": "A",
              "coding": "A"
            },
            {
              "label": "B",
              "coding": "B"
            }
          ],
          "help": "",
          "name": "pick_10"
        },
        {
          "required": true,
          "type": "divider"
        },
        {
          "required": true,
          "type": "html",
          "content": "\u003Cstyle\u003E\r\n  .audio-container {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: flex-start;\r\n    gap: 30px;\r\n    flex-wrap: nowrap;\r\n    margin: 20px auto;\r\n    max-width: 1000px;\r\n  }\r\n  .audio-box {\r\n    flex: 1;\r\n    min-width: 400px;\r\n    background: #f9fafc;\r\n    border: 1px solid #ddd;\r\n    border-radius: 10px;\r\n    padding: 10px 15px;\r\n    box-shadow: 0 1px 5px rgba(0,0,0,0.08);\r\n  }\r\n  .audio-box h3 {\r\n    text-align: center;\r\n    color: #1e3a8a;\r\n    margin-bottom: 8px;\r\n  }\r\n  iframe {\r\n    width: 100%;\r\n    height: 166px;\r\n    border: none;\r\n    border-radius: 8px;\r\n  }\r\n\r\n  \u002F* Optional: stack vertically on narrow screens *\u002F\r\n  @media (max-width: 850px) {\r\n    .audio-container {\r\n      flex-direction: column;\r\n      align-items: center;\r\n    }\r\n    .audio-box {\r\n      min-width: 80%;\r\n    }\r\n  }\r\n\u003C\u002Fstyle\u003E\r\n\r\n\u003Ch2\u003E# Trial 11\u003C\u002Fh2\u003E\r\n\r\n\u003Cdiv class=\"audio-container\"\u003E\r\n  \u003Cdiv class=\"audio-box\"\u003E\r\n    \u003Ch3\u003EAudio A\u003C\u002Fh3\u003E\r\n    \u003Ciframe \r\n      allow=\"autoplay\"\r\n      scrolling=\"no\"\r\n      src=\"https:\u002F\u002Fw.soundcloud.com\u002Fplayer\u002F?url=https%3A\u002F\u002Fapi.soundcloud.com\u002Ftracks\u002Fsoundcloud%253Atracks%253A2204649503&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=false&show_reposts=false&show_teaser=true\"\u003E\r\n    \u003C\u002Fiframe\u003E\r\n  \u003C\u002Fdiv\u003E\r\n\r\n  \u003Cdiv class=\"audio-box\"\u003E\r\n    \u003Ch3\u003EAudio B\u003C\u002Fh3\u003E\r\n    \u003Ciframe \r\n      allow=\"autoplay\"\r\n      scrolling=\"no\"\r\n      src=\"https:\u002F\u002Fw.soundcloud.com\u002Fplayer\u002F?url=https%3A\u002F\u002Fapi.soundcloud.com\u002Ftracks\u002Fsoundcloud%253Atracks%253A2204649503&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=false&show_reposts=false&show_teaser=true\"\u003E\r\n    \u003C\u002Fiframe\u003E\r\n  \u003C\u002Fdiv\u003E\r\n\u003C\u002Fdiv\u003E\r\n",
          "name": ""
        },
        {
          "required": true,
          "type": "radio",
          "label": "How noticeable the noise is?",
          "options": [
            {
              "label": "1 = No noise (A=B) or Unnoticeable noise",
              "coding": "1"
            },
            {
              "label": "2 = Slightly",
              "coding": "2"
            },
            {
              "label": "3 = Moderately",
              "coding": "3"
            },
            {
              "label": "4 = Very",
              "coding": "4"
            },
            {
              "label": "5 = Extremely",
              "coding": "5"
            }
          ],
          "name": "rate_11"
        },
        {
          "required": true,
          "type": "radio",
          "label": "Which contains the noise?",
          "options": [
            {
              "label": "Not applicable or cannot be perceived",
              "coding": "C"
            },
            {
              "label": "A",
              "coding": "A"
            },
            {
              "label": "B",
              "coding": "B"
            }
          ],
          "help": "",
          "name": "pick_11"
        },
        {
          "required": true,
          "type": "divider"
        },
        {
          "required": true,
          "type": "html",
          "content": "\u003Cstyle\u003E\r\n  .audio-container {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: flex-start;\r\n    gap: 30px;\r\n    flex-wrap: nowrap;\r\n    margin: 20px auto;\r\n    max-width: 1000px;\r\n  }\r\n  .audio-box {\r\n    flex: 1;\r\n    min-width: 400px;\r\n    background: #f9fafc;\r\n    border: 1px solid #ddd;\r\n    border-radius: 10px;\r\n    padding: 10px 15px;\r\n    box-shadow: 0 1px 5px rgba(0,0,0,0.08);\r\n  }\r\n  .audio-box h3 {\r\n    text-align: center;\r\n    color: #1e3a8a;\r\n    margin-bottom: 8px;\r\n  }\r\n  iframe {\r\n    width: 100%;\r\n    height: 166px;\r\n    border: none;\r\n    border-radius: 8px;\r\n  }\r\n\r\n  \u002F* Optional: stack vertically on narrow screens *\u002F\r\n  @media (max-width: 850px) {\r\n    .audio-container {\r\n      flex-direction: column;\r\n      align-items: center;\r\n    }\r\n    .audio-box {\r\n      min-width: 80%;\r\n    }\r\n  }\r\n\u003C\u002Fstyle\u003E\r\n\r\n\u003Ch2\u003E# Trial 12\u003C\u002Fh2\u003E\r\n\r\n\u003Cdiv class=\"audio-container\"\u003E\r\n  \u003Cdiv class=\"audio-box\"\u003E\r\n    \u003Ch3\u003EAudio A\u003C\u002Fh3\u003E\r\n    \u003Ciframe \r\n      allow=\"autoplay\"\r\n      scrolling=\"no\"\r\n      src=\"https:\u002F\u002Fw.soundcloud.com\u002Fplayer\u002F?url=https%3A\u002F\u002Fapi.soundcloud.com\u002Ftracks\u002Fsoundcloud%253Atracks%253A2204431995&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=false&show_reposts=false&show_teaser=true\"\u003E\r\n    \u003C\u002Fiframe\u003E\r\n  \u003C\u002Fdiv\u003E\r\n\r\n  \u003Cdiv class=\"audio-box\"\u003E\r\n    \u003Ch3\u003EAudio B\u003C\u002Fh3\u003E\r\n    \u003Ciframe \r\n      allow=\"autoplay\"\r\n      scrolling=\"no\"\r\n      src=\"https:\u002F\u002Fw.soundcloud.com\u002Fplayer\u002F?url=https%3A\u002F\u002Fapi.soundcloud.com\u002Ftracks\u002Fsoundcloud%253Atracks%253A2204558779&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=false&show_reposts=false&show_teaser=true\"\u003E\r\n    \u003C\u002Fiframe\u003E\r\n  \u003C\u002Fdiv\u003E\r\n\u003C\u002Fdiv\u003E\r\n",
          "name": ""
        },
        {
          "required": true,
          "type": "radio",
          "label": "How noticeable the noise is?",
          "options": [
            {
              "label": "1 = No noise (A=B) or Unnoticeable noise",
              "coding": "1"
            },
            {
              "label": "2 = Slightly",
              "coding": "2"
            },
            {
              "label": "3 = Moderately",
              "coding": "3"
            },
            {
              "label": "4 = Very",
              "coding": "4"
            },
            {
              "label": "5 = Extremely",
              "coding": "5"
            }
          ],
          "name": "rate_12"
        },
        {
          "required": true,
          "type": "radio",
          "label": "Which contains the noise?",
          "options": [
            {
              "label": "Not applicable or cannot be perceived",
              "coding": "C"
            },
            {
              "label": "A",
              "coding": "A"
            },
            {
              "label": "B",
              "coding": "B"
            }
          ],
          "help": "",
          "name": "pick_12"
        },
        {
          "required": true,
          "type": "divider"
        },
        {
          "required": true,
          "type": "html",
          "content": "\u003Cstyle\u003E\r\n  .audio-container {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: flex-start;\r\n    gap: 30px;\r\n    flex-wrap: nowrap;\r\n    margin: 20px auto;\r\n    max-width: 1000px;\r\n  }\r\n  .audio-box {\r\n    flex: 1;\r\n    min-width: 400px;\r\n    background: #f9fafc;\r\n    border: 1px solid #ddd;\r\n    border-radius: 10px;\r\n    padding: 10px 15px;\r\n    box-shadow: 0 1px 5px rgba(0,0,0,0.08);\r\n  }\r\n  .audio-box h3 {\r\n    text-align: center;\r\n    color: #1e3a8a;\r\n    margin-bottom: 8px;\r\n  }\r\n  iframe {\r\n    width: 100%;\r\n    height: 166px;\r\n    border: none;\r\n    border-radius: 8px;\r\n  }\r\n\r\n  \u002F* Optional: stack vertically on narrow screens *\u002F\r\n  @media (max-width: 850px) {\r\n    .audio-container {\r\n      flex-direction: column;\r\n      align-items: center;\r\n    }\r\n    .audio-box {\r\n      min-width: 80%;\r\n    }\r\n  }\r\n\u003C\u002Fstyle\u003E\r\n\r\n\u003Ch2\u003E# Trial 13\u003C\u002Fh2\u003E\r\n\r\n\u003Cdiv class=\"audio-container\"\u003E\r\n  \u003Cdiv class=\"audio-box\"\u003E\r\n    \u003Ch3\u003EAudio A\u003C\u002Fh3\u003E\r\n    \u003Ciframe \r\n      allow=\"autoplay\"\r\n      scrolling=\"no\"\r\n      src=\"https:\u002F\u002Fw.soundcloud.com\u002Fplayer\u002F?url=https%3A\u002F\u002Fapi.soundcloud.com\u002Ftracks\u002Fsoundcloud%253Atracks%253A2204558783&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=false&show_reposts=false&show_teaser=true\"\u003E\r\n    \u003C\u002Fiframe\u003E\r\n  \u003C\u002Fdiv\u003E\r\n\r\n  \u003Cdiv class=\"audio-box\"\u003E\r\n    \u003Ch3\u003EAudio B\u003C\u002Fh3\u003E\r\n    \u003Ciframe \r\n      allow=\"autoplay\"\r\n      scrolling=\"no\"\r\n      src=\"https:\u002F\u002Fw.soundcloud.com\u002Fplayer\u002F?url=https%3A\u002F\u002Fapi.soundcloud.com\u002Ftracks\u002Fsoundcloud%253Atracks%253A2204431991&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=false&show_reposts=false&show_teaser=true\"\u003E\r\n    \u003C\u002Fiframe\u003E\r\n  \u003C\u002Fdiv\u003E\r\n\u003C\u002Fdiv\u003E\r\n",
          "name": ""
        },
        {
          "required": true,
          "type": "radio",
          "label": "How noticeable the noise is?",
          "options": [
            {
              "label": "1 = No noise (A=B) or Unnoticeable noise",
              "coding": "1"
            },
            {
              "label": "2 = Slightly",
              "coding": "2"
            },
            {
              "label": "3 = Moderately",
              "coding": "3"
            },
            {
              "label": "4 = Very",
              "coding": "4"
            },
            {
              "label": "5 = Extremely",
              "coding": "5"
            }
          ],
          "name": "rate_13"
        },
        {
          "required": true,
          "type": "radio",
          "label": "Which contains the noise?",
          "options": [
            {
              "label": "Not applicable or cannot be perceived",
              "coding": "C"
            },
            {
              "label": "A",
              "coding": "A"
            },
            {
              "label": "B",
              "coding": "B"
            }
          ],
          "help": "",
          "name": "pick_13"
        },
        {
          "required": true,
          "type": "divider"
        },
        {
          "required": true,
          "type": "html",
          "content": "\u003Cstyle\u003E\r\n  .audio-container {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: flex-start;\r\n    gap: 30px;\r\n    flex-wrap: nowrap;\r\n    margin: 20px auto;\r\n    max-width: 1000px;\r\n  }\r\n  .audio-box {\r\n    flex: 1;\r\n    min-width: 400px;\r\n    background: #f9fafc;\r\n    border: 1px solid #ddd;\r\n    border-radius: 10px;\r\n    padding: 10px 15px;\r\n    box-shadow: 0 1px 5px rgba(0,0,0,0.08);\r\n  }\r\n  .audio-box h3 {\r\n    text-align: center;\r\n    color: #1e3a8a;\r\n    margin-bottom: 8px;\r\n  }\r\n  iframe {\r\n    width: 100%;\r\n    height: 166px;\r\n    border: none;\r\n    border-radius: 8px;\r\n  }\r\n\r\n  \u002F* Optional: stack vertically on narrow screens *\u002F\r\n  @media (max-width: 850px) {\r\n    .audio-container {\r\n      flex-direction: column;\r\n      align-items: center;\r\n    }\r\n    .audio-box {\r\n      min-width: 80%;\r\n    }\r\n  }\r\n\u003C\u002Fstyle\u003E\r\n\r\n\u003Ch2\u003E# Trial 14\u003C\u002Fh2\u003E\r\n\r\n\u003Cdiv class=\"audio-container\"\u003E\r\n  \u003Cdiv class=\"audio-box\"\u003E\r\n    \u003Ch3\u003EAudio A\u003C\u002Fh3\u003E\r\n    \u003Ciframe \r\n      allow=\"autoplay\"\r\n      scrolling=\"no\"\r\n      src=\"https:\u002F\u002Fw.soundcloud.com\u002Fplayer\u002F?url=https%3A\u002F\u002Fapi.soundcloud.com\u002Ftracks\u002Fsoundcloud%253Atracks%253A2204431967&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=false&show_reposts=false&show_teaser=true\"\u003E\r\n    \u003C\u002Fiframe\u003E\r\n  \u003C\u002Fdiv\u003E\r\n\r\n  \u003Cdiv class=\"audio-box\"\u003E\r\n    \u003Ch3\u003EAudio B\u003C\u002Fh3\u003E\r\n    \u003Ciframe \r\n      allow=\"autoplay\"\r\n      scrolling=\"no\"\r\n      src=\"https:\u002F\u002Fw.soundcloud.com\u002Fplayer\u002F?url=https%3A\u002F\u002Fapi.soundcloud.com\u002Ftracks\u002Fsoundcloud%253Atracks%253A2204558735&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=false&show_reposts=false&show_teaser=true\"\u003E\r\n    \u003C\u002Fiframe\u003E\r\n  \u003C\u002Fdiv\u003E\r\n\u003C\u002Fdiv\u003E\r\n",
          "name": ""
        },
        {
          "required": true,
          "type": "radio",
          "label": "How noticeable the noise is?",
          "options": [
            {
              "label": "1 = No noise (A=B) or Unnoticeable noise",
              "coding": "1"
            },
            {
              "label": "2 = Slightly",
              "coding": "2"
            },
            {
              "label": "3 = Moderately",
              "coding": "3"
            },
            {
              "label": "4 = Very",
              "coding": "4"
            },
            {
              "label": "5 = Extremely",
              "coding": "5"
            }
          ],
          "name": "rate_14"
        },
        {
          "required": true,
          "type": "radio",
          "label": "Which contains the noise?",
          "options": [
            {
              "label": "Not applicable or cannot be perceived",
              "coding": "C"
            },
            {
              "label": "A",
              "coding": "A"
            },
            {
              "label": "B",
              "coding": "B"
            }
          ],
          "help": "",
          "name": "pick_14"
        },
        {
          "required": true,
          "type": "divider"
        },
        {
          "required": true,
          "type": "html",
          "content": "\u003Cstyle\u003E\r\n  .audio-container {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: flex-start;\r\n    gap: 30px;\r\n    flex-wrap: nowrap;\r\n    margin: 20px auto;\r\n    max-width: 1000px;\r\n  }\r\n  .audio-box {\r\n    flex: 1;\r\n    min-width: 400px;\r\n    background: #f9fafc;\r\n    border: 1px solid #ddd;\r\n    border-radius: 10px;\r\n    padding: 10px 15px;\r\n    box-shadow: 0 1px 5px rgba(0,0,0,0.08);\r\n  }\r\n  .audio-box h3 {\r\n    text-align: center;\r\n    color: #1e3a8a;\r\n    margin-bottom: 8px;\r\n  }\r\n  iframe {\r\n    width: 100%;\r\n    height: 166px;\r\n    border: none;\r\n    border-radius: 8px;\r\n  }\r\n\r\n  \u002F* Optional: stack vertically on narrow screens *\u002F\r\n  @media (max-width: 850px) {\r\n    .audio-container {\r\n      flex-direction: column;\r\n      align-items: center;\r\n    }\r\n    .audio-box {\r\n      min-width: 80%;\r\n    }\r\n  }\r\n\u003C\u002Fstyle\u003E\r\n\r\n\u003Ch2\u003E# Trial 15\u003C\u002Fh2\u003E\r\n\r\n\u003Cdiv class=\"audio-container\"\u003E\r\n  \u003Cdiv class=\"audio-box\"\u003E\r\n    \u003Ch3\u003EAudio A\u003C\u002Fh3\u003E\r\n    \u003Ciframe \r\n      allow=\"autoplay\"\r\n      scrolling=\"no\"\r\n      src=\"https:\u002F\u002Fw.soundcloud.com\u002Fplayer\u002F?url=https%3A\u002F\u002Fapi.soundcloud.com\u002Ftracks\u002Fsoundcloud%253Atracks%253A2204558743&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=false&show_reposts=false&show_teaser=true\"\u003E\r\n    \u003C\u002Fiframe\u003E\r\n  \u003C\u002Fdiv\u003E\r\n\r\n  \u003Cdiv class=\"audio-box\"\u003E\r\n    \u003Ch3\u003EAudio B\u003C\u002Fh3\u003E\r\n    \u003Ciframe \r\n      allow=\"autoplay\"\r\n      scrolling=\"no\"\r\n      src=\"https:\u002F\u002Fw.soundcloud.com\u002Fplayer\u002F?url=https%3A\u002F\u002Fapi.soundcloud.com\u002Ftracks\u002Fsoundcloud%253Atracks%253A2204432003&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=false&show_reposts=false&show_teaser=true\"\u003E\r\n    \u003C\u002Fiframe\u003E\r\n  \u003C\u002Fdiv\u003E\r\n\u003C\u002Fdiv\u003E\r\n",
          "name": ""
        },
        {
          "required": true,
          "type": "radio",
          "label": "How noticeable the noise is?",
          "options": [
            {
              "label": "1 = No noise (A=B) or Unnoticeable noise",
              "coding": "1"
            },
            {
              "label": "2 = Slightly",
              "coding": "2"
            },
            {
              "label": "3 = Moderately",
              "coding": "3"
            },
            {
              "label": "4 = Very",
              "coding": "4"
            },
            {
              "label": "5 = Extremely",
              "coding": "5"
            }
          ],
          "name": "rate_15"
        },
        {
          "required": true,
          "type": "radio",
          "label": "Which contains the noise?",
          "options": [
            {
              "label": "Not applicable or cannot be perceived",
              "coding": "C"
            },
            {
              "label": "A",
              "coding": "A"
            },
            {
              "label": "B",
              "coding": "B"
            }
          ],
          "help": "",
          "name": "pick_15"
        },
        {
          "required": true,
          "type": "divider"
        },
        {
          "required": true,
          "type": "html",
          "content": "\u003Cstyle\u003E\r\n  .audio-container {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: flex-start;\r\n    gap: 30px;\r\n    flex-wrap: nowrap;\r\n    margin: 20px auto;\r\n    max-width: 1000px;\r\n  }\r\n  .audio-box {\r\n    flex: 1;\r\n    min-width: 400px;\r\n    background: #f9fafc;\r\n    border: 1px solid #ddd;\r\n    border-radius: 10px;\r\n    padding: 10px 15px;\r\n    box-shadow: 0 1px 5px rgba(0,0,0,0.08);\r\n  }\r\n  .audio-box h3 {\r\n    text-align: center;\r\n    color: #1e3a8a;\r\n    margin-bottom: 8px;\r\n  }\r\n  iframe {\r\n    width: 100%;\r\n    height: 166px;\r\n    border: none;\r\n    border-radius: 8px;\r\n  }\r\n\r\n  \u002F* Optional: stack vertically on narrow screens *\u002F\r\n  @media (max-width: 850px) {\r\n    .audio-container {\r\n      flex-direction: column;\r\n      align-items: center;\r\n    }\r\n    .audio-box {\r\n      min-width: 80%;\r\n    }\r\n  }\r\n\u003C\u002Fstyle\u003E\r\n\r\n\u003Ch2\u003E# Trial 16\u003C\u002Fh2\u003E\r\n\r\n\u003Cdiv class=\"audio-container\"\u003E\r\n  \u003Cdiv class=\"audio-box\"\u003E\r\n    \u003Ch3\u003EAudio A\u003C\u002Fh3\u003E\r\n    \u003Ciframe \r\n      allow=\"autoplay\"\r\n      scrolling=\"no\"\r\n      src=\"https:\u002F\u002Fw.soundcloud.com\u002Fplayer\u002F?url=https%3A\u002F\u002Fapi.soundcloud.com\u002Ftracks\u002Fsoundcloud%253Atracks%253A2204431979&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=false&show_reposts=false&show_teaser=true\"\u003E\r\n    \u003C\u002Fiframe\u003E\r\n  \u003C\u002Fdiv\u003E\r\n\r\n  \u003Cdiv class=\"audio-box\"\u003E\r\n    \u003Ch3\u003EAudio B\u003C\u002Fh3\u003E\r\n    \u003Ciframe \r\n      allow=\"autoplay\"\r\n      scrolling=\"no\"\r\n      src=\"https:\u002F\u002Fw.soundcloud.com\u002Fplayer\u002F?url=https%3A\u002F\u002Fapi.soundcloud.com\u002Ftracks\u002Fsoundcloud%253Atracks%253A2204558731&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=false&show_reposts=false&show_teaser=true\"\u003E\r\n    \u003C\u002Fiframe\u003E\r\n  \u003C\u002Fdiv\u003E\r\n\u003C\u002Fdiv\u003E\r\n",
          "name": ""
        },
        {
          "required": true,
          "type": "radio",
          "label": "How noticeable the noise is?",
          "options": [
            {
              "label": "1 = No noise (A=B) or Unnoticeable noise",
              "coding": "1"
            },
            {
              "label": "2 = Slightly",
              "coding": "2"
            },
            {
              "label": "3 = Moderately",
              "coding": "3"
            },
            {
              "label": "4 = Very",
              "coding": "4"
            },
            {
              "label": "5 = Extremely",
              "coding": "5"
            }
          ],
          "name": "rate_16"
        },
        {
          "required": true,
          "type": "radio",
          "label": "Which contains the noise?",
          "options": [
            {
              "label": "Not applicable or cannot be perceived",
              "coding": "C"
            },
            {
              "label": "A",
              "coding": "A"
            },
            {
              "label": "B",
              "coding": "B"
            }
          ],
          "help": "",
          "name": "pick_16"
        },
        {
          "required": true,
          "type": "divider"
        },
        {
          "required": true,
          "type": "html",
          "content": "\u003Cstyle\u003E\r\n  .audio-container {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: flex-start;\r\n    gap: 30px;\r\n    flex-wrap: nowrap;\r\n    margin: 20px auto;\r\n    max-width: 1000px;\r\n  }\r\n  .audio-box {\r\n    flex: 1;\r\n    min-width: 400px;\r\n    background: #f9fafc;\r\n    border: 1px solid #ddd;\r\n    border-radius: 10px;\r\n    padding: 10px 15px;\r\n    box-shadow: 0 1px 5px rgba(0,0,0,0.08);\r\n  }\r\n  .audio-box h3 {\r\n    text-align: center;\r\n    color: #1e3a8a;\r\n    margin-bottom: 8px;\r\n  }\r\n  iframe {\r\n    width: 100%;\r\n    height: 166px;\r\n    border: none;\r\n    border-radius: 8px;\r\n  }\r\n\r\n  \u002F* Optional: stack vertically on narrow screens *\u002F\r\n  @media (max-width: 850px) {\r\n    .audio-container {\r\n      flex-direction: column;\r\n      align-items: center;\r\n    }\r\n    .audio-box {\r\n      min-width: 80%;\r\n    }\r\n  }\r\n\u003C\u002Fstyle\u003E\r\n\r\n\u003Ch2\u003E# Trial 17\u003C\u002Fh2\u003E\r\n\r\n\u003Cdiv class=\"audio-container\"\u003E\r\n  \u003Cdiv class=\"audio-box\"\u003E\r\n    \u003Ch3\u003EAudio A\u003C\u002Fh3\u003E\r\n    \u003Ciframe \r\n      allow=\"autoplay\"\r\n      scrolling=\"no\"\r\n      src=\"https:\u002F\u002Fw.soundcloud.com\u002Fplayer\u002F?url=https%3A\u002F\u002Fapi.soundcloud.com\u002Ftracks\u002Fsoundcloud%253Atracks%253A2204649507&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=false&show_reposts=false&show_teaser=true\"\u003E\r\n    \u003C\u002Fiframe\u003E\r\n  \u003C\u002Fdiv\u003E\r\n\r\n  \u003Cdiv class=\"audio-box\"\u003E\r\n    \u003Ch3\u003EAudio B\u003C\u002Fh3\u003E\r\n    \u003Ciframe \r\n      allow=\"autoplay\"\r\n      scrolling=\"no\"\r\n      src=\"https:\u002F\u002Fw.soundcloud.com\u002Fplayer\u002F?url=https%3A\u002F\u002Fapi.soundcloud.com\u002Ftracks\u002Fsoundcloud%253Atracks%253A2204649507&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=false&show_reposts=false&show_teaser=true\"\u003E\r\n    \u003C\u002Fiframe\u003E\r\n  \u003C\u002Fdiv\u003E\r\n\u003C\u002Fdiv\u003E\r\n",
          "name": ""
        },
        {
          "required": true,
          "type": "radio",
          "label": "How noticeable the noise is?",
          "options": [
            {
              "label": "1 = No noise (A=B) or Unnoticeable noise",
              "coding": "1"
            },
            {
              "label": "2 = Slightly",
              "coding": "2"
            },
            {
              "label": "3 = Moderately",
              "coding": "3"
            },
            {
              "label": "4 = Very",
              "coding": "4"
            },
            {
              "label": "5 = Extremely",
              "coding": "5"
            }
          ],
          "name": "rate_17"
        },
        {
          "required": true,
          "type": "radio",
          "label": "Which contains the noise?",
          "options": [
            {
              "label": "Not applicable or cannot be perceived",
              "coding": "C"
            },
            {
              "label": "A",
              "coding": "A"
            },
            {
              "label": "B",
              "coding": "B"
            }
          ],
          "help": "",
          "name": "pick_17"
        },
        {
          "required": true,
          "type": "divider"
        },
        {
          "required": true,
          "type": "html",
          "content": "\u003Cstyle\u003E\r\n  .audio-container {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: flex-start;\r\n    gap: 30px;\r\n    flex-wrap: nowrap;\r\n    margin: 20px auto;\r\n    max-width: 1000px;\r\n  }\r\n  .audio-box {\r\n    flex: 1;\r\n    min-width: 400px;\r\n    background: #f9fafc;\r\n    border: 1px solid #ddd;\r\n    border-radius: 10px;\r\n    padding: 10px 15px;\r\n    box-shadow: 0 1px 5px rgba(0,0,0,0.08);\r\n  }\r\n  .audio-box h3 {\r\n    text-align: center;\r\n    color: #1e3a8a;\r\n    margin-bottom: 8px;\r\n  }\r\n  iframe {\r\n    width: 100%;\r\n    height: 166px;\r\n    border: none;\r\n    border-radius: 8px;\r\n  }\r\n\r\n  \u002F* Optional: stack vertically on narrow screens *\u002F\r\n  @media (max-width: 850px) {\r\n    .audio-container {\r\n      flex-direction: column;\r\n      align-items: center;\r\n    }\r\n    .audio-box {\r\n      min-width: 80%;\r\n    }\r\n  }\r\n\u003C\u002Fstyle\u003E\r\n\r\n\u003Ch2\u003E# Trial 18\u003C\u002Fh2\u003E\r\n\r\n\u003Cdiv class=\"audio-container\"\u003E\r\n  \u003Cdiv class=\"audio-box\"\u003E\r\n    \u003Ch3\u003EAudio A\u003C\u002Fh3\u003E\r\n    \u003Ciframe \r\n      allow=\"autoplay\"\r\n      scrolling=\"no\"\r\n      src=\"https:\u002F\u002Fw.soundcloud.com\u002Fplayer\u002F?url=https%3A\u002F\u002Fapi.soundcloud.com\u002Ftracks\u002Fsoundcloud%253Atracks%253A2204558715&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=false&show_reposts=false&show_teaser=true\"\u003E\r\n    \u003C\u002Fiframe\u003E\r\n  \u003C\u002Fdiv\u003E\r\n\r\n  \u003Cdiv class=\"audio-box\"\u003E\r\n    \u003Ch3\u003EAudio B\u003C\u002Fh3\u003E\r\n    \u003Ciframe \r\n      allow=\"autoplay\"\r\n      scrolling=\"no\"\r\n      src=\"https:\u002F\u002Fw.soundcloud.com\u002Fplayer\u002F?url=https%3A\u002F\u002Fapi.soundcloud.com\u002Ftracks\u002Fsoundcloud%253Atracks%253A2204431963&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=false&show_reposts=false&show_teaser=true\"\u003E\r\n    \u003C\u002Fiframe\u003E\r\n  \u003C\u002Fdiv\u003E\r\n\u003C\u002Fdiv\u003E\r\n",
          "name": ""
        },
        {
          "required": true,
          "type": "radio",
          "label": "How noticeable the noise is?",
          "options": [
            {
              "label": "1 = No noise (A=B) or Unnoticeable noise",
              "coding": "1"
            },
            {
              "label": "2 = Slightly",
              "coding": "2"
            },
            {
              "label": "3 = Moderately",
              "coding": "3"
            },
            {
              "label": "4 = Very",
              "coding": "4"
            },
            {
              "label": "5 = Extremely",
              "coding": "5"
            }
          ],
          "name": "rate_18"
        },
        {
          "required": true,
          "type": "radio",
          "label": "Which contains the noise?",
          "options": [
            {
              "label": "Not applicable or cannot be perceived",
              "coding": "C"
            },
            {
              "label": "A",
              "coding": "A"
            },
            {
              "label": "B",
              "coding": "B"
            }
          ],
          "help": "",
          "name": "pick_18"
        },
        {
          "required": true,
          "type": "divider"
        },
        {
          "required": true,
          "type": "html",
          "content": "\u003Cstyle\u003E\r\n  .audio-container {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: flex-start;\r\n    gap: 30px;\r\n    flex-wrap: nowrap;\r\n    margin: 20px auto;\r\n    max-width: 1000px;\r\n  }\r\n  .audio-box {\r\n    flex: 1;\r\n    min-width: 400px;\r\n    background: #f9fafc;\r\n    border: 1px solid #ddd;\r\n    border-radius: 10px;\r\n    padding: 10px 15px;\r\n    box-shadow: 0 1px 5px rgba(0,0,0,0.08);\r\n  }\r\n  .audio-box h3 {\r\n    text-align: center;\r\n    color: #1e3a8a;\r\n    margin-bottom: 8px;\r\n  }\r\n  iframe {\r\n    width: 100%;\r\n    height: 166px;\r\n    border: none;\r\n    border-radius: 8px;\r\n  }\r\n\r\n  \u002F* Optional: stack vertically on narrow screens *\u002F\r\n  @media (max-width: 850px) {\r\n    .audio-container {\r\n      flex-direction: column;\r\n      align-items: center;\r\n    }\r\n    .audio-box {\r\n      min-width: 80%;\r\n    }\r\n  }\r\n\u003C\u002Fstyle\u003E\r\n\r\n\u003Ch2\u003E# Trial 19\u003C\u002Fh2\u003E\r\n\r\n\u003Cdiv class=\"audio-container\"\u003E\r\n  \u003Cdiv class=\"audio-box\"\u003E\r\n    \u003Ch3\u003EAudio A\u003C\u002Fh3\u003E\r\n    \u003Ciframe \r\n      allow=\"autoplay\"\r\n      scrolling=\"no\"\r\n      src=\"https:\u002F\u002Fw.soundcloud.com\u002Fplayer\u002F?url=https%3A\u002F\u002Fapi.soundcloud.com\u002Ftracks\u002Fsoundcloud%253Atracks%253A2204432011&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=false&show_reposts=false&show_teaser=true\"\u003E\r\n    \u003C\u002Fiframe\u003E\r\n  \u003C\u002Fdiv\u003E\r\n\r\n  \u003Cdiv class=\"audio-box\"\u003E\r\n    \u003Ch3\u003EAudio B\u003C\u002Fh3\u003E\r\n    \u003Ciframe \r\n      allow=\"autoplay\"\r\n      scrolling=\"no\"\r\n      src=\"https:\u002F\u002Fw.soundcloud.com\u002Fplayer\u002F?url=https%3A\u002F\u002Fapi.soundcloud.com\u002Ftracks\u002Fsoundcloud%253Atracks%253A2204558727&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=false&show_reposts=false&show_teaser=true\"\u003E\r\n    \u003C\u002Fiframe\u003E\r\n  \u003C\u002Fdiv\u003E\r\n\u003C\u002Fdiv\u003E\r\n",
          "name": ""
        },
        {
          "required": true,
          "type": "radio",
          "label": "How noticeable the noise is?",
          "options": [
            {
              "label": "1 = No noise (A=B) or Unnoticeable noise",
              "coding": "1"
            },
            {
              "label": "2 = Slightly",
              "coding": "2"
            },
            {
              "label": "3 = Moderately",
              "coding": "3"
            },
            {
              "label": "4 = Very",
              "coding": "4"
            },
            {
              "label": "5 = Extremely",
              "coding": "5"
            }
          ],
          "name": "rate_19"
        },
        {
          "required": true,
          "type": "radio",
          "label": "Which contains the noise?",
          "options": [
            {
              "label": "Not applicable or cannot be perceived",
              "coding": "C"
            },
            {
              "label": "A",
              "coding": "A"
            },
            {
              "label": "B",
              "coding": "B"
            }
          ],
          "help": "",
          "name": "pick_19"
        },
        {
          "required": true,
          "type": "divider"
        },
        {
          "required": true,
          "type": "html",
          "content": "\u003Cstyle\u003E\r\n  .audio-container {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: flex-start;\r\n    gap: 30px;\r\n    flex-wrap: nowrap;\r\n    margin: 20px auto;\r\n    max-width: 1000px;\r\n  }\r\n  .audio-box {\r\n    flex: 1;\r\n    min-width: 400px;\r\n    background: #f9fafc;\r\n    border: 1px solid #ddd;\r\n    border-radius: 10px;\r\n    padding: 10px 15px;\r\n    box-shadow: 0 1px 5px rgba(0,0,0,0.08);\r\n  }\r\n  .audio-box h3 {\r\n    text-align: center;\r\n    color: #1e3a8a;\r\n    margin-bottom: 8px;\r\n  }\r\n  iframe {\r\n    width: 100%;\r\n    height: 166px;\r\n    border: none;\r\n    border-radius: 8px;\r\n  }\r\n\r\n  \u002F* Optional: stack vertically on narrow screens *\u002F\r\n  @media (max-width: 850px) {\r\n    .audio-container {\r\n      flex-direction: column;\r\n      align-items: center;\r\n    }\r\n    .audio-box {\r\n      min-width: 80%;\r\n    }\r\n  }\r\n\u003C\u002Fstyle\u003E\r\n\r\n\u003Ch2\u003E# Trial 20\u003C\u002Fh2\u003E\r\n\r\n\u003Cdiv class=\"audio-container\"\u003E\r\n  \u003Cdiv class=\"audio-box\"\u003E\r\n    \u003Ch3\u003EAudio A\u003C\u002Fh3\u003E\r\n    \u003Ciframe \r\n      allow=\"autoplay\"\r\n      scrolling=\"no\"\r\n      src=\"https:\u002F\u002Fw.soundcloud.com\u002Fplayer\u002F?url=https%3A\u002F\u002Fapi.soundcloud.com\u002Ftracks\u002Fsoundcloud%253Atracks%253A2204558775&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=false&show_reposts=false&show_teaser=true\"\u003E\r\n    \u003C\u002Fiframe\u003E\r\n  \u003C\u002Fdiv\u003E\r\n\r\n  \u003Cdiv class=\"audio-box\"\u003E\r\n    \u003Ch3\u003EAudio B\u003C\u002Fh3\u003E\r\n    \u003Ciframe \r\n      allow=\"autoplay\"\r\n      scrolling=\"no\"\r\n      src=\"https:\u002F\u002Fw.soundcloud.com\u002Fplayer\u002F?url=https%3A\u002F\u002Fapi.soundcloud.com\u002Ftracks\u002Fsoundcloud%253Atracks%253A2204432031&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=false&show_reposts=false&show_teaser=true\"\u003E\r\n    \u003C\u002Fiframe\u003E\r\n  \u003C\u002Fdiv\u003E\r\n\u003C\u002Fdiv\u003E\r\n",
          "name": ""
        },
        {
          "required": true,
          "type": "radio",
          "label": "How noticeable the noise is?",
          "options": [
            {
              "label": "1 = No noise (A=B) or Unnoticeable noise",
              "coding": "1"
            },
            {
              "label": "2 = Slightly",
              "coding": "2"
            },
            {
              "label": "3 = Moderately",
              "coding": "3"
            },
            {
              "label": "4 = Very",
              "coding": "4"
            },
            {
              "label": "5 = Extremely",
              "coding": "5"
            }
          ],
          "name": "rate_20"
        },
        {
          "required": true,
          "type": "radio",
          "label": "Which contains the noise?",
          "options": [
            {
              "label": "Not applicable or cannot be perceived",
              "coding": "C"
            },
            {
              "label": "A",
              "coding": "A"
            },
            {
              "label": "B",
              "coding": "B"
            }
          ],
          "help": "",
          "name": "pick_20"
        },
        {
          "required": true,
          "type": "divider"
        },
        {
          "required": true,
          "type": "html",
          "content": "\u003Cstyle\u003E\r\n  .audio-container {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: flex-start;\r\n    gap: 30px;\r\n    flex-wrap: nowrap;\r\n    margin: 20px auto;\r\n    max-width: 1000px;\r\n  }\r\n  .audio-box {\r\n    flex: 1;\r\n    min-width: 400px;\r\n    background: #f9fafc;\r\n    border: 1px solid #ddd;\r\n    border-radius: 10px;\r\n    padding: 10px 15px;\r\n    box-shadow: 0 1px 5px rgba(0,0,0,0.08);\r\n  }\r\n  .audio-box h3 {\r\n    text-align: center;\r\n    color: #1e3a8a;\r\n    margin-bottom: 8px;\r\n  }\r\n  iframe {\r\n    width: 100%;\r\n    height: 166px;\r\n    border: none;\r\n    border-radius: 8px;\r\n  }\r\n\r\n  \u002F* Optional: stack vertically on narrow screens *\u002F\r\n  @media (max-width: 850px) {\r\n    .audio-container {\r\n      flex-direction: column;\r\n      align-items: center;\r\n    }\r\n    .audio-box {\r\n      min-width: 80%;\r\n    }\r\n  }\r\n\u003C\u002Fstyle\u003E\r\n\r\n\u003Ch2\u003E# Trial 21\u003C\u002Fh2\u003E\r\n\r\n\u003Cdiv class=\"audio-container\"\u003E\r\n  \u003Cdiv class=\"audio-box\"\u003E\r\n    \u003Ch3\u003EAudio A\u003C\u002Fh3\u003E\r\n    \u003Ciframe \r\n      allow=\"autoplay\"\r\n      scrolling=\"no\"\r\n      src=\"https:\u002F\u002Fw.soundcloud.com\u002Fplayer\u002F?url=https%3A\u002F\u002Fapi.soundcloud.com\u002Ftracks\u002Fsoundcloud%253Atracks%253A2204431975&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=false&show_reposts=false&show_teaser=true\"\u003E\r\n    \u003C\u002Fiframe\u003E\r\n  \u003C\u002Fdiv\u003E\r\n\r\n  \u003Cdiv class=\"audio-box\"\u003E\r\n    \u003Ch3\u003EAudio B\u003C\u002Fh3\u003E\r\n    \u003Ciframe \r\n      allow=\"autoplay\"\r\n      scrolling=\"no\"\r\n      src=\"https:\u002F\u002Fw.soundcloud.com\u002Fplayer\u002F?url=https%3A\u002F\u002Fapi.soundcloud.com\u002Ftracks\u002Fsoundcloud%253Atracks%253A2204558751&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=false&show_reposts=false&show_teaser=true\"\u003E\r\n    \u003C\u002Fiframe\u003E\r\n  \u003C\u002Fdiv\u003E\r\n\u003C\u002Fdiv\u003E\r\n",
          "name": ""
        },
        {
          "required": true,
          "type": "radio",
          "label": "How noticeable the noise is?",
          "options": [
            {
              "label": "1 = No noise (A=B) or Unnoticeable noise",
              "coding": "1"
            },
            {
              "label": "2 = Slightly",
              "coding": "2"
            },
            {
              "label": "3 = Moderately",
              "coding": "3"
            },
            {
              "label": "4 = Very",
              "coding": "4"
            },
            {
              "label": "5 = Extremely",
              "coding": "5"
            }
          ],
          "name": "rate_21"
        },
        {
          "required": true,
          "type": "radio",
          "label": "Which contains the noise?",
          "options": [
            {
              "label": "Not applicable or cannot be perceived",
              "coding": "C"
            },
            {
              "label": "A",
              "coding": "A"
            },
            {
              "label": "B",
              "coding": "B"
            }
          ],
          "help": "",
          "name": "pick_21"
        },
        {
          "required": true,
          "type": "html",
          "content": "\u003Cstyle\u003E\r\n  section {\r\n    font-family: \"Segoe UI\", Arial, sans-serif;\r\n    background: #f9fafc;\r\n    border: 1px solid #ddd;\r\n    border-radius: 12px;\r\n    padding: 20px 24px;\r\n    margin: 20px auto;\r\n    max-width: 1000px;\r\n    box-shadow: 0 2px 6px rgba(0,0,0,0.05);\r\n  }\r\n  section h2 {\r\n    color: #1e3a8a;\r\n    border-bottom: 2px solid #3b82f6;\r\n    padding-bottom: 6px;\r\n    margin-bottom: 14px;\r\n  }\r\n  p {\r\n    line-height: 1.6;\r\n    margin: 0;\r\n  }\r\n  strong {\r\n    color: #0f172a;\r\n  }\r\n  em {\r\n    color: #dc2626;\r\n    font-style: normal;\r\n  }\r\n\u003C\u002Fstyle\u003E\r\n\r\n\u003Csection id=\"submission-note\"\u003E\r\n  \u003Ch2\u003ESubmission Note\u003C\u002Fh2\u003E\r\n  \u003Cp\u003E\r\n    <em>Please note:</em> After completing all trials, you may need to <strong>click the “Submit” button twice</strong> (prepare and then submit the responses).\r\n       Once you are redirected to the <strong>thank-you page</strong>, your participation is complete.\r\n    You may then safely close this window.\r\n  \u003C\u002Fp\u003E\r\n\u003C\u002Fsection\u003E\r\n",
          "name": ""
        },
      ],
      "scrollTop": true,
      "submitButtonText": "Submit",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Page"
    }
  ]
})

// Let's go!
study.run()

