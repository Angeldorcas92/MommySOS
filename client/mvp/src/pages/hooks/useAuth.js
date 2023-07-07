import React, { useContext, useState } from 'react';
import { AuthContext } from '../authpro';

const useAuth = () => {

    return useContext(AuthContext);
}


export default useAuth;