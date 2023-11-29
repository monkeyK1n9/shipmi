import React, {useState} from 'react';
import * as DocumentPicker from 'expo-document-picker'
import { View, Text, Image, Dimensions } from 'react-native';
import {TextInput, ActivityIndicator} from 'react-native-paper'
import { PrimaryButton, SecondaryButton } from '../components/Button/Button';
import { Spacer } from '../../../utils/Spacer';
import styled from 'styled-components/native'
import * as FileSystem from 'expo-file-system'
// import SmsAndroid from 'react-native-get-sms-android'
import { theme } from '../../../infrastructure/theme';
var SmsAndroid = require('react-native-sms-android')

const ContentView = styled(View)`
    align-items: center;
`


export const SendScreen = () => {
    const [file, setFile] = useState()
    const [phoneNumber, setPhoneNumber] = useState(null)
    const [error, setError] = useState('')
    const [message, setMessage] = useState()
    const [isLoading, setIsLoading] = useState(false)
    
    //cache the file in the app before sending
    const uploadDocument = async () => {
        try {
            const document = await DocumentPicker.getDocumentAsync()
            
            if (document.type == 'cancel'){
                console.log('Cancelled')
                return
            }
            
            setFile(document)
            console.log(document)
        }
        catch (e) {
            console.log(e)
        }
    }
    
    // const toBase64 = file => new Promise((resolve, reject) => {
        //     const reader = new FileReader();
        //     reader.readAsDataURL(file);
        //     reader.onload = () => resolve(reader.result);
        //     reader.onerror = error => reject(error);
        // })
        
    const convertAction = async (value) => {
        try {
            const result = await FileSystem.readAsStringAsync(value.uri, {encoding: FileSystem.EncodingType.Base64})
            
            setMessage('result')
            // console.log(result)
            // return result
        } catch(err) {
            console.error(err);
            return;
        }
    }
        
    const sendSMS = async () => {
        setIsLoading(true)
        try {
            await SmsAndroid.sms(
                phoneNumber,
                "message",
                'sendDirect',
                (err, msg) => {
                    if (err) {
                        console.log('Failed with this error: ' + fail);
                        setIsLoading(false)
                        return
                    }
                    console.log('SMS sent successfully', msg);
                    setIsLoading(false)
                },
            );
        }
        catch (e) {
            console.log(e)
            setIsLoading(false)
        }
    }

    return (
        <>
            <ContentView>
                <Spacer size="large" />
                <Spacer size="large" />

                {/* Phone number input */}
                <TextInput
                    mode={'outlined'}
                    onChangeText={(t) => setPhoneNumber(t)}
                    placeholder={"Enter the recipient's phonenumber"}
                    value={phoneNumber}
                    style={{width: 0.8*Dimensions.get('window').width}}
                />
                {error && (
                    <Text style={{textAlign: 'center', fontSize: 12, color: 'red'}}>{error}</Text>
                )}

                <Spacer size="large" />

                <Text style={{textAlign: 'center'}}>Press the upload button to upload the file you want to send</Text>
                <Spacer size="large" />

                {/* File preview display */}
                {file && (
                    <>
                        {file.mimeType.substring(0, 3) == "image" ? (
                            <Image 
                                source={file.uri} 
                                resizeMode={'center'}
                                style={{
                                    maxWidth: 0.8*Dimensions.get('window').width,
                                    maxHeight: 0.5*Dimensions.get('window').height
                                }}
                            />
                        ): file.mimeType == "application/pdf" ? (
                            <Image 
                                source={require('../../../../assets/pdfLogo.jpeg')} 
                                resizeMode={'center'}
                                style={{
                                    maxWidth: 0.8*Dimensions.get('window').width,
                                    maxHeight: 0.5*Dimensions.get('window').height
                                }}
                            />
                        ): (
                            <Image 
                                source={require('../../../../assets/otherLogo.jpg')} 
                                resizeMode={'center'}
                                style={{
                                    maxWidth: 0.8*Dimensions.get('window').width,
                                    maxHeight: 0.5*Dimensions.get('window').height
                                }}
                            />
                        )}
                        <Spacer size="large" />
                        <Text style={{textAlign: 'center'}}>{file.name}</Text>
                        <Spacer size="large" />
                    </>
                )}

                {/* Call for action buttons */}

                <PrimaryButton 
                    title= 'Upload'
                    pressAction={uploadDocument}
                />
                <Spacer size="large" />
                <Spacer size="large" />


                <SecondaryButton 
                    title= {isLoading ? (<ActivityIndicator color={theme.colors.ui.primary} size={20}/>) : 'Send'}
                    pressAction={() => {
                        if (phoneNumber == null || phoneNumber.length < 9) {
                            setError('Error: Please enter a valid 9 digits phone number')
                            return
                        }
                        else if(!file) {
                            setError('')
                            return alert('Please upload a document to send')
                        }

                        setError('')
                        convertAction(file)
                        sendSMS()
                    }}
                />
            </ContentView>
        </>
    )
}