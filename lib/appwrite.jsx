
import { Client,Account,ID, Avatars, Databases, Query } from 'react-native-appwrite';

export const config={
    endpoint:'https://cloud.appwrite.io/v1',
    platform : 'com.ping.appsense',
    projectId : '66b776fa000e6c7e7010',
    databaseId : '66b77ac500215fbf011a',
    storageId: '66b847c7002a15afb445',
    userCollectionId: '66b77b47000b21c4bba4',
    videoCollectionId: '66b77b52001c45e01e79'

}
const {
    endpoint,
    platform ,
    projectId, 
    databaseId , 
    storageId, 
    userCollectionId,
    videoCollectionId,
} = config;

// Init your React Native SDK
const client = new Client();

client
    .setEndpoint(config.endpoint) // Your Appwrite Endpoint
    .setProject(config.projectId) // Your project ID
    .setPlatform(config.platform) // Your application ID or bundle ID.
;


const account = new Account(client);    //for new account setup 
const avatar = new Avatars(client);     //for new avatar setup (initial letter avatar)
const database = new Databases(client)

export const createAccount= async (email,password,username)=>{

try{
    const newAccount = await account.create(ID.unique(),email,password,username)
    {if (!newAccount) throw Error};

    const avatarUrl = avatar.getInitials(username)
    await SignInAccount(email,password)

    const newUser = await database.createDocument(config.databaseId,config.userCollectionId,ID.unique(),{
        accountId : newAccount.$id,
        email : email,
        username: username,
        avatar: avatarUrl
        
    })
    return newUser;
}catch(error){
    console.log(error);
    throw new Error(error) 
}

}

export const SignInAccount= async (email,password)=>{
try {
    const session = await account.createEmailPasswordSession(email,password)
    return session;
} catch (error) {
    console.log(error)
    throw new Error(error)
}

}

export const getCurrentUser = async() =>{

    try {
        
        const currentAccount = await account.get()
        
        if(!currentAccount) throw error

        const currentUser = await database.listDocuments(config.databaseId,config.userCollectionId,[Query.equal('accountId',currentAccount.$id)])
        
        if(!currentUser) throw error 
        
        return currentUser.documents[0]
    } catch (error) {
        console.log(error)
    }
}

export const getAllPosts = async () =>{


    try{
        const posts = await database.listDocuments(
          config.databaseId,
          config.videoCollectionId    
        )
        return posts.documents
    }
    catch(error){
        console.log(error)
        throw new Error(error)
    }
}


export const getLatestPosts = async () =>{


    try{
        const posts = await database.listDocuments(
          config.databaseId,
          config.videoCollectionId,    
          [Query.orderDesc('$createdAt',Query.limit(7))]
        )
        return posts.documents
    }
    catch(error){
        console.log(error)
        throw new Error(error)
    }
}