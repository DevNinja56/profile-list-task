import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

const index = () => {
    const { push } = useRouter();
    useEffect(() => { push('/dashboard') }, [])
    return (
        <></>
    )
}

export default index