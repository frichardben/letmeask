import { ButtonHTMLAttributes } from 'react';

import '../styles/button.scss';

type ButtonPros = ButtonHTMLAttributes<HTMLButtonElement> & {
    isOutlined?: boolean
};

export function Button({isOutlined = false, ...props}: ButtonPros) {
    return(
        <button 
            className={`button ${isOutlined ? 'outlined' : ''}`}
            {...props} 
        />
    )
}