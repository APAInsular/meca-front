

const TermsConditionsPage = () => {
    return(
        <div className="p-4 overflow-hidden"> 
            <div className="bg-[#263C5C] w-[90%] md:w-[80%] lg:w-[90%] mx-auto rounded-3xl mb-4"> 
                <h1 className="text-[30px] md:text-[40px] lg:text-[80px] text-white tracking-widest mx-auto text-center py-4">Your privacy is important</h1>
            </div>
            
            <img className="w-[15%] md:w-[10%] h-auto mx-auto mt-2" src="/Image/lock.png" alt="padlock"/>
            
            <ol className="w-[90%] md:w-[80%] lg:w-[60%] mx-auto list-decimal mt-2">
                <li className="mb-4">Legal Agreement:
                Accepting terms and conditions establishes a legally binding agreement between the user and the service or product provider. These terms outline the rights and responsibilities of both parties, ensuring a clear understanding of the relationship.</li>
                <li className="mb-4">User Protection:
                Terms and conditions often include clauses that outline how user data will be handled and protected. This is vital for safeguarding personal information and ensuring that the service complies with relevant privacy laws. By accepting these terms, users give their explicit consent to the data handling practices outlined.</li>
                <li className="mb-4">Security and Compliance:
                Many terms and conditions detail the security measures implemented by the service to protect user data. Acceptance implies acknowledgment of these security protocols, assuring users that the provider is committed to maintaining a secure environment.</li>
                <li className="mb-4">Usage Guidelines:
                Terms and conditions specify how users are expected to interact with the platform, what is allowed or prohibited, and any potential consequences for violations. This helps maintain a positive and respectful online environment.</li>
                <li className="mb-4">Intellectual Property and Copyright:
                Accepting terms and conditions often involves acknowledging the intellectual property and copyright policies of the platform. This is crucial for understanding how users can use, share, or distribute content within the confines of the service.</li>
                <li className="mb-4">Updates and Changes:
                Service providers may reserve the right to update or modify their terms and conditions. Users, by accepting these terms, agree to stay informed about any changes and adhere to the updated terms. This ensures that users are aware of any alterations to the agreement.</li>
                <li className="mb-4">Dispute Resolution:
                Terms and conditions often include clauses regarding dispute resolution mechanisms, such as arbitration or mediation. Accepting these terms implies the user's consent to these processes in the event of disagreements.</li>
                <li className="mb-[70%] lg:mb-[20%] ">Service Limitations:
                The terms and conditions may outline any limitations or restrictions on the use of the service. Users need to be aware of these limitations to ensure they use the platform within the prescribed boundaries.</li>
            </ol>

        </div>
    );
 }

export default TermsConditionsPage;



