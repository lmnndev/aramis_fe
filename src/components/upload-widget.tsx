import {useRef, useState,useEffect} from 'react'
import { UploadWidgetValue } from '@/types';
import { CloudUpload } from 'lucide-react';
import { CLOUDINARY_NAME, CLOUDINARY_PRESET, CLOUDINARY_PRESETUNSIGNED } from '@/constants';
const UploadWidget = ({
    value=null, 
    onChange, 
    disabled = false
    }) => {
    const widgetRef = useRef<CloudinaryWidget | null>(null)
    const onChangeRef = useRef(onChange);

    const [preview, setPreview] = useState<UploadWidgetValue | null>(value)
    const [deleteToken, setDeleteToken] = useState<string|null>(null)
    const [isRemoving, setIsRemoving] = useState(false)
    

    const openWidget = () => {
        if(!disabled) widgetRef.current?.open();
    }

    const removeFromCloudinary = async () => {

    }



    useEffect(()=> {
        onChangeRef.current = onChange;
    },[onChange])

    useEffect(()=>{
        setPreview(value);
        if(!value)setDeleteToken(null)
    },[value])

    useEffect(()=> {
        //check if window exists
        if(typeof window === 'undefined') return;

        const initializeWidget = () => {
            if(!window.cloudinary || widgetRef.current) return false;

            widgetRef.current = window.cloudinary.createUploadWidget({
                cloudName: CLOUDINARY_NAME,
                uploadPreset: CLOUDINARY_PRESETUNSIGNED,
                multiple: false,
                folder: 'uploads',
                maxFileSize: 5000000,
                clientAllowedFormats: ['png', 'jpg', 'jpeg', 'webp']
            }, (err, res)=>{
                if(!err && res.event ==='success'){
                    const payload: UploadWidgetValue = {
                        url: res.info.secure_url,
                        publicId: res.info.public_id,
                    }

                    setPreview(payload)
                    setDeleteToken(res.info.delete_token??null)

                    onChangeRef.current?.(payload)
                }
            });

            return true;
        }

        if(initializeWidget()) return;

        const intervalId = window.setInterval(()=>{
            if(initializeWidget()){
                window.clearInterval(intervalId)
            }
        }, 500)

        return () => window.clearInterval(intervalId)
    },[])
    return (
    <div className="space-y-2">
        {
            preview ? (
                <div className="upload-preview">
                    <img src={preview.url} alt={"Temporary Uploaded File"}/>
                </div>
            )
            :
            (
                <div 
                className="upload-dropzone" 
                role="button" 
                tabIndex={0}
                onClick = {openWidget}
                onKeyDown={(event) => {
                    if(event.key==='Enter'){
                        event?.preventDefault();
                        openWidget();
                    }
                }}
                >
                    <div className="upload-prompt">
                        <CloudUpload className='icon'/>
                        <div className="">
                            <p>
                                Click to upload photo
                            </p>
                            <p>
                                PNG, JPG up to 5MB
                            </p>
                        </div>
                    </div>
                </div>
            )
        }

        
    </div>
    )
}

export default UploadWidget