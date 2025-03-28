import React from "react";

const Contact =  () => {
    return (
        <div className="card border-success text-dark mb-3">
        <div className="container mx-auto py-4 px-4">
            <div className="bg-white rounded-md shadow-md p-6">
                <div className="mb-4">
                    <h2 className="text-2xl font-bold">Contact Us</h2>
                    <img
                        src="/CustomerSupport.jpg"
                        alt="Employees in a row" // Important for accessibility
                        className="mb-4 rounded-md" // Added margin and rounded corners for styling
                        style={{ maxWidth: '35%', height: 'auto' }} // Added style for responsiveness
                    />
                    <p className="text-gray-500">We'd love to hear from you</p>
                </div>
                <div>
                <p className="mb-4">If you have any questions or feedback, please don't hesitate to contact us at support@employeems.com</p>
                <p className="mb-4">+918999714817</p>
                <p>111 Business St, Suite 100, Nagpur, Maharashtra 442001</p>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Contact;