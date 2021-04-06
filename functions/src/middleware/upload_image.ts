import { bucket } from './firebase_util'

const fileUpload = async (filePath: string, base64Image: string): Promise<void> => {
    const file = bucket.file(filePath)
    const buffer = Buffer.from(base64Image, 'base64');
    await file.save(buffer, {
        metadata: {
            contentType: "image/png",
        }
    })
}

const fileUploadBuffer = async (filePath: string, bufferImage: Buffer): Promise<void> => {
    const file = bucket.file(filePath)
    await file.save(bufferImage, {
        metadata: {
            contentType: "image/png",
        }
    })
}

const getDownloadURL = async (filePath: string): Promise<string> => {
    const STORAGE_ROOT = "https://firebasestorage.googleapis.com/v0/b"
    const bucketName = bucket.name
    const dlPath = encodeURIComponent(filePath)
    const dlURL = STORAGE_ROOT + '/' + bucketName + '/o/' + dlPath + '?alt=media'
    return dlURL
}



export const imageUpload = async (fileName: string, base64Image: string): Promise<string> => {
    return fileUpload(fileName, base64Image).then(() => {
        return getDownloadURL(fileName)
    })
}

export const imageUploadBuffer = async (fileName: string, bufferImage: Buffer): Promise<string> => {
    return fileUploadBuffer(fileName, bufferImage).then(() => {
        return getDownloadURL(fileName)
    })
}