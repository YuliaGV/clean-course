( () => {
    

    type Gender = 'M' | 'F';

    interface PersonProps{
        name: string;
        gender: Gender;
        birthDate: Date;
    }

    class Person{

        public name: string;
        public gender: Gender;
        public birthDate: Date;
 
        constructor ({name, gender, birthDate}:PersonProps){
            this.name = name;
            this.gender = gender;
            this.birthDate = birthDate;
        }
        
    }


    interface UserProps{
        role: string;
        email: string;
        name: string;
        gender: Gender;
        birthDate: Date;
    }

    class User extends Person{

        public role: string;
        public email: string;
        public lastAccess: Date;
      
 
        constructor ({role, email, name, gender, birthDate}:UserProps){
          super({name, gender, birthDate})
          this.role = role;
          this.email = email;
          this.lastAccess = new Date();
          
           
        }

        checkCredentials(){
            return true;
        }


    }

    interface UserSettingsProps{
        lastOpenFolder: string;
        workingDirectory: string;
        role: string;
        email: string;
        name: string;
        gender: Gender;
        birthDate: Date;
    }

    class UserSettings extends User {


        public lastOpenFolder: string;
        public workingDirectory: string;

       constructor({lastOpenFolder, workingDirectory, role, email, name, gender, birthDate}:UserSettingsProps){
        super({role, email, name, gender, birthDate})
        this.lastOpenFolder = lastOpenFolder;
        this.workingDirectory = workingDirectory;
       }





    }


   
    //const newUser = new User('Yuliana', 'M', new Date('1995-12-26'));

    
})()