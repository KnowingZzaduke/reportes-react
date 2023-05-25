
import axios from 'axios';
import CryptoJS from 'crypto-js';
export const functions = {
    login: async function (user, password) {
        const formData = new FormData();
        formData.append('user', user);
        formData.append('password', password);

        try {
            const response = await axios.post('/api.php?action=login', formData);
            return response;
        } catch (error) {
            console.log(error);
            return false;
        }
    },
    signup: async function (user, password, email) {
        const formData = new FormData();
        formData.append('user', user);
        formData.append('password', password);
        formData.append('email', email);

        try {
            const response = await axios.post('/api.php?action=signup', formData);
            return response;
        } catch (error) {
            console.log(error);
            return false;
        }
    },
    updateReport: async function (form) {
        const formData = new FormData();
        formData.append('code', form.code);
        formData.append('file', form.files);
        formData.append('date', form.date);
        formData.append('comments', form.comment);
        try {
            if (!form.id) {
                form.id = "aleatoricode";
            }
            return await axios.post('/api.php?action=updateReport', formData);

        } catch (error) {
            console.log(error);
            return false;
        }
    },
    makeReport: async function (form) {
        const formData = new FormData();
        formData.append('code', form.id);
        formData.append('file', form.files);
        formData.append('date', form.date);
        formData.append('comments', form.comment);
        try {
            if (!form.id) {
                form.id = "aleatoricode";
            }
            return await axios.post('/api.php?action=makeReport', formData);

        } catch (error) {
            console.log(error);
            return false;
        }
    },
    deleteReport: async function (id) {
        const formData = new FormData();
        formData.append('code', id);
        try {
            return await axios.post("/api.php?action=deleteReport", formData)

        } catch (error) {
            console.log(error);
            return false;
        }
    },
    getReports: async function (id) {
        try {
            const formData = new FormData();
            formData.append('code', id);
            return await axios.post("/api.php?action=getReports", formData)
        } catch (error) {
            console.log(error);
            return false;
        }
    },
    decryptdata : function (data){
        const bytes = CryptoJS.AES.decrypt(data, "FDhfd678GHSDFS23");
        const decrypted = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
        return decrypted;
          
    },
    encryptData : function(data) {
        const encrypted = CryptoJS.AES.encrypt(JSON.stringify(data), "FDhfd678GHSDFS23");
        return encrypted;
    },
    grafico : function(){
        
    }
}