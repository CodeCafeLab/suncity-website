'use server';

/**
 * @fileOverview This file defines a Genkit flow for a customer support chatbot that answers questions about solar energy, Suncity Solar's products, and FAQs.
 *
 * - `customerSupportChatbot` - The main function that processes user queries and returns answers from the chatbot.
 * - `CustomerSupportChatbotInput` - The input type for the `customerSupportChatbot` function.
 * - `CustomerSupportChatbotOutput` - The output type for the `customerSupportChatbot` function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const CustomerSupportChatbotInputSchema = z.object({
  query: z.string().describe('The user query about solar energy, Suncity Solar products, or FAQs.'),
});
export type CustomerSupportChatbotInput = z.infer<typeof CustomerSupportChatbotInputSchema>;

const CustomerSupportChatbotOutputSchema = z.object({
  answer: z.string().describe('The chatbot answer to the user query.'),
});
export type CustomerSupportChatbotOutput = z.infer<typeof CustomerSupportChatbotOutputSchema>;

export async function customerSupportChatbot(input: CustomerSupportChatbotInput): Promise<CustomerSupportChatbotOutput> {
  return customerSupportChatbotFlow(input);
}

const prompt = ai.definePrompt({
  name: 'customerSupportChatbotPrompt',
  input: {schema: CustomerSupportChatbotInputSchema},
  output: {schema: CustomerSupportChatbotOutputSchema},
  prompt: `You are a customer support chatbot for Suncity Solar. Your goal is to answer questions about solar energy, Suncity Solar's products, and frequently asked questions (FAQs).
  Use the following information to provide accurate and helpful responses:

  Suncity Solar is a venture of Shree Chandramangal Suncity Marketing Pvt. Ltd., established on 14 June 2019. It is an ISO 9001:2015 certified and government-registered startup recognized by BIS, FICCI, ASSOCHAM, and CE organizations. They manufacture and supply solar panels, inverters, batteries, heaters, street lights, pumps, and complete solar systems for homes, commercial, agriculture, and industry under Make in India.

  Suncity Solar offers a range of products, including:
  - Solar Panels (3W–550W Mono-PERC)
  - Solar Inverters & Lithium PCUs (1KW–11KW)
  - Solar Street Lights
  - Solar Water Heaters
  - Solar Water Pumps (3HP–10HP)
  - On-grid/Off-grid/Hybrid Systems (1KW–25KW)
  - Solar Fans, BLDC Fans, Lamps, Multi Maxima

  Frequently asked questions:
  - Best solar system for homes: Hybrid or on-grid systems are recommended.
  - Panel lifespan: 35–45 years.
  - Installation availability: Nationwide.
  - Area required for 1KW: 80 sq.ft.
  - RMS monitoring explanation: Remote Monitoring System for performance tracking.
  - Warranties: Panel 35 years, inverter 3 years, battery 5 years.

  Now, answer the following question:
  {{query}}`,
});

const customerSupportChatbotFlow = ai.defineFlow(
  {
    name: 'customerSupportChatbotFlow',
    inputSchema: CustomerSupportChatbotInputSchema,
    outputSchema: CustomerSupportChatbotOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
