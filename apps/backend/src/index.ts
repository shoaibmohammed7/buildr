require ("dotenv").config();
import express from "express";

import OpenAI from "openai";
import { BASE_PROMPT, getSystemPrompt } from "./prompts";
import { TextContentBlockParam } from "openai/resources/beta/threads/messages";
import {basePrompt as reactPrompt} from "./defaults/reatct"
import { basePrompt as nodePrompt } from "./defaults/node";
import { basePrompt as nextPrompt } from "./defaults/next";

const openai = new OpenAI();

const app =express()

app.use(express.json())

app.post("/template", async(req,res)=>{

    const prompt = req.body.prompt;

    const response = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        max_tokens: 1000,
        messages: [
            {
                role:"system",
                content:"You are a strict assistant. Based on the requirements of the project, you must return only one of these exact words: 'node', 'react', or 'nextjs'. No explanations, punctuation, or additional text is allowed. Only respond with one of these three words."

            },{
                role: "user",
                content: prompt
            },
        ],
     
    })

    const answer = response.choices[0].message.content?.trim();

    if (answer == "react"){
        res.json({
            prompts: [BASE_PROMPT, `# Project Files\n\nThe following is a list of all project files and their complete contents that are currently visible and accessible to you.\n\n${reactPrompt}\n\nHere is a list of files that exist on the file system but are not being shown to you:\n\n  - .gitignore\n  - package-lock.json\n`],
            uiPrompts: [reactPrompt]
        })
        return;
    }

    if (answer == "node"){
        res.json({
            prompts: [`# Project Files\n\nThe following is a list of all project files and their complete contents that are currently visible and accessible to you.\n\n${nodePrompt}Here is a list of files that exist on the file system but are not being shown to you:\n\n  - .gitignore\n  - package-lock.json`],
            uiPrompts:[nodePrompt]
        })
        return;
    }

    if (answer == "nextjs"){
        res.json({
            prompts:[BASE_PROMPT, `# Project Files\n\nThe following is a list of all project files and their complete contents that are currently visible and accessible to you.\n${nextPrompt}Here is a list of files that exist on the file system but are not being shown to you:\n\n  - .gitignore\n  - package-lock.json\n  - .bolt/ignore\n  - .bolt/prompt\n  - hooks/use-toast.ts\n  - components/ui/accordion.tsx\n  - components/ui/alert-dialog.tsx\n  - components/ui/alert.tsx\n  - components/ui/aspect-ratio.tsx\n  - components/ui/avatar.tsx\n  - components/ui/badge.tsx\n  - components/ui/breadcrumb.tsx\n  - components/ui/button.tsx\n  - components/ui/calendar.tsx\n  - components/ui/card.tsx\n  - components/ui/carousel.tsx\n  - components/ui/chart.tsx\n  - components/ui/checkbox.tsx\n  - components/ui/collapsible.tsx\n  - components/ui/command.tsx\n  - components/ui/context-menu.tsx\n  - components/ui/dialog.tsx\n  - components/ui/drawer.tsx\n  - components/ui/dropdown-menu.tsx\n  - components/ui/form.tsx\n  - components/ui/hover-card.tsx\n  - components/ui/input-otp.tsx\n  - components/ui/input.tsx\n  - components/ui/label.tsx\n  - components/ui/menubar.tsx\n  - components/ui/navigation-menu.tsx\n  - components/ui/pagination.tsx\n  - components/ui/popover.tsx\n  - components/ui/progress.tsx\n  - components/ui/radio-group.tsx\n  - components/ui/resizable.tsx\n  - components/ui/scroll-area.tsx\n  - components/ui/select.tsx\n  - components/ui/separator.tsx\n  - components/ui/sheet.tsx\n  - components/ui/skeleton.tsx\n  - components/ui/slider.tsx\n  - components/ui/sonner.tsx\n  - components/ui/switch.tsx\n  - components/ui/table.tsx\n  - components/ui/tabs.tsx\n  - components/ui/textarea.tsx\n  - components/ui/toast.tsx\n  - components/ui/toaster.tsx\n  - components/ui/toggle-group.tsx\n  - components/ui/toggle.tsx\n  - components/ui/tooltip.tsx`],
            uiPrompts:[nextPrompt]
        })
        return;
    }



})



app.post("/chat", async(req,res)=>{

    const messages = req.body.messages;
    const formattedMessages = [
        {
            role: "system",
            content: getSystemPrompt(), 
        },
        ...messages, 
    ];

    const response = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        max_tokens: 8000, 
        messages: formattedMessages,
    });

    console.log("GPT Response:", response.choices[0].message.content);

    res.json({
        response: response.choices[0].message?.content
    });

})


app.listen(process.env.PORT || 3000)























