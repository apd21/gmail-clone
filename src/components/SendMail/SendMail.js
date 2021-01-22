import './SendMail.css';
import CloseIcon from '@material-ui/icons/Close';
import { Button } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import { closeSendMessage } from '../../features/mailSlice';
import { useDispatch } from 'react-redux';

const SendMail = () => {
    const {register, handleSubmit, watch, errors} = useForm();
    const dispatch = useDispatch();
    const onSubmit = (formData) => {
        console.log(formData);
    }

    return (
        <div className='sendMail'>
            <div className='sendMail__header'>
                <h3>New Message</h3>
                <CloseIcon onClick={()=> dispatch(closeSendMessage())} className='sendMail__close' />
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
                <input 
                    name='to' 
                    type='email' 
                    placeholder='To' 
                    ref={register({ required: true})} 
                />
                {errors.to && <p className='sendMail_error'>To is Required</p>}

                <input 
                    name='subject' 
                    type='text' 
                    placeholder='Subject' 
                    ref={register({ required: true})} 
                />
                {errors.subject && <p className='sendMail_error'>Subject is Required</p>}


                <input 
                    name='message' 
                    type='text' 
                    placeholder='Message...' 
                    className='sendMail__message' 
                    ref={register({ required: true})} 
                />
                {errors.message && <p className='sendMail_error'>Message is Required</p>}

                <div className='sendMail__options'>
                    <Button 
                        className='sendMail__send' 
                        variant='contained' 
                        color='primary' 
                        type='submit'>
                        Send
                    </Button>
                </div>
            </form>
        </div>
    );
}

export default SendMail;
