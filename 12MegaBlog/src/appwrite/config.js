import conf from '../conf/conf.js';
import { Client, ID, Databases, Storage, Query } from 'appwrite';

export class Service{
    client = new Client();
    databases;
    bucket;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

   

    async createPost({title, slug, content, featuredImage, status, userId} ) {
        try {
            const response = await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                ID.unique(),
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId
                }
            );
            return response;
        } catch (error) {
            console.error('Error creating post:', error);
            throw error;
        }
    }

   async updatePost(slug, {title,  content, featuredImage, status}) {
        try {
            const response = await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug, // Assuming slug is the document ID
                {
                    title,
                    content,
                    featuredImage,
                    status
                }
            );
            return response;
        } catch (error) {
            console.error('Error updating post:', error);
            throw error;
        }
    }


    async deletePost(slug) {
        try {
            await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug // Assuming slug is the document ID
            );
        } catch (error) {
            console.error('Error deleting post:', error);
            throw error;
        }
    }

    async getPost(slug) {
        try {
            const response = await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug // Assuming slug is the document ID
            );
            return response;
        } catch (error) {
            console.error('Error fetching post:', error);
            throw error;
        }
    }

    async getPosts(
        queries = [Query.equal("satus", "active")],
    ) {
        try {
            const response = await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries,
            );
            return response.documents;
        } catch (error) {
            console.error('Error fetching posts:', error);
            throw error;
        }
    }

    async uploadFile(file) {
        try {
            const response = await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            );
            return response;
        } catch (error) {
            console.error('Error uploading file:', error);
            throw error;
        }
    }

    async deleteFile(fileId) {
        try {
            await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId
            );
        } catch (error) {
            console.error('Error deleting file:', error);
            throw error;
        }
    }

    getFilePreviewUrl(fileId) {
        return this.bucket.getFilePreview(
            conf.appwriteBucketId,
            fileId,
        );
    }
}

const service = new Service();