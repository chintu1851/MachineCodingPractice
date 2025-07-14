import React from 'react'

const PasswordStrength = ({password}) => {
    const getpasswordstrength = () => {
        const passwordlength = password.length

        if (passwordlength < 1) {
            return ""
        }
        else if (passwordlength < 4) {
            return "very weak"
        }
        else if (passwordlength < 8) {
            return "poor"
        }
        else if (passwordlength < 12) {
            return "medium"
        }
        else if (passwordlength < 16) {
            return "strong"
        }
        else  {
            return "very strong"
        }
    }

    const getpass = getpasswordstrength()
    return (
        <div className='passwordstrength'>
            Strength:<span style={{fontWeight:'bold'}}>{getpass}</span>
        </div>
    )
}

export default PasswordStrength
