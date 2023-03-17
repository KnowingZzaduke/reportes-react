
export const functions = {
    login: async function(user, password){
        try {
            return await fetch("http://127.0.0.1/api.php?action=login",{
                method: 'POST',
                headers: {
                    'content-Type':'application/json',
                    'clientCode':'hjk4r4sdjs435o93s'
                },
                body: JSON.stringify({
                    user,
                    password
                })
    
            }) 
            
        } catch (error) {
            console.log(error);
            return false;
        }
    }, 
    updateReport: async function(id,file,date,comment) {
        try {
            return await fetch("http://127.0.0.1/api.php?action=updateReport",{
                method: 'POST',
                headers: {
                    'content-Type':'application/json',
                    'clientCode':'hjk4r4sdjs435o93s'
                },
                body: JSON.stringify({
                    id,
                    file,
                    date,
                    comment
                })
    
            }) 
            
        } catch (error) {
            console.log(error);
            return false;
        }
    },
    makeReport: async function(form) {
        const formData = new FormData();
        formData.append('id', form.id);
        formData.append('file', form.files);
        formData.append('date', form.date);
        formData.append('comment', form.comment);
        try {
            if(!form.id){
                form.id = "aleatoricode";
            }
            return await fetch("http://127.0.0.1/api.php?action=makeReport",{
                method: 'POST',
                body: formData
    
            }) 
            
        } catch (error) {
            console.log(error);
            return false;
        }
    },
    deleteReport: async function(id) {
        try {
            return await fetch("http://127.0.0.1/api.php?action=deleteReport",{
                method: 'POST',
                headers: {
                    'content-Type':'application/json',
                    'clientCode':'hjk4r4sdjs435o93s'
                },
                body: JSON.stringify({
                    id
                })
    
            }) 
            
        } catch (error) {
            console.log(error);
            return false;
        }
    },
    getReports: async function(){
        try {
            return await fetch("http://127.0.0.1/api.php?action=getReports",{
                method: 'POST',
                headers: {
                    'content-Type':'application/json',
                    'clientCode':'hjk4r4sdjs435o93s'
                }
    
            }) 
            
        } catch (error) {
            console.log(error);
            return false;
        }
    }
}