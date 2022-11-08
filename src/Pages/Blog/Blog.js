import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className='border-2 border-black bg-red-50 p-3 m-5'>
            <h1 className='text-center'>Difference between SQL and NoSQL</h1>
            <p>SQL is the programming language used to interface with relational databases. (Relational databases model data as records in rows and tables with logical links between them). NoSQL is a class of DBMs that are non-relational and generally do not use SQL.

There are five practical differences between SQL and NoSQL:

Language
Scalability
Structure
Properties
Support and communities</p>
            
            </div>
        <div className='border-2 border-black bg-red-50 p-3 m-5'>
            <h1 className='text-center'>What is JWT, and how does it work?</h1>
            <p>JSON Web Token (JWT) is an open standard (RFC 7519) for securely transmitting information between parties as JSON object.

It is compact, readable and digitally signed using a private key/ or a public key pair by the Identity Provider(IdP). So the integrity and authenticity of the token can be verified by other parties involved.

The purpose of using JWT is not to hide data but to ensure the authenticity of the data. JWT is signed and encoded, not encrypted. 

JWT is a token based stateless authentication mechanism. Since it is a client-side based stateless session, server doesn't have to completely rely on a datastore(database) to save session information.

</p>
            
            </div>
        <div className='border-2 border-black bg-red-50 p-3 m-5'>
            <h1 className='text-center'>What is the difference between javascript and NodeJS?</h1>
            <p>1. JavaScript is a client-side scripting language that is lightweight, cross-platform, and interpreted. Both Java and HTML include it. Node.js, on the other hand, is a V8-based server-side programming language.

As a result, it is used to create network-centric applications. It's a networked system made for data-intensive real-time applications. If we compare node js vs. python, it is clear that node js will always be the preferred option.

2. JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node.js, on the other hand, is an interpreter or execution environment for the JavaScript programming language. It requires libraries that can be conveniently accessed from JavaScript programming to be more helpful.

</p>
            
            </div>
       
        </div>
        
    );
};

export default Blog;