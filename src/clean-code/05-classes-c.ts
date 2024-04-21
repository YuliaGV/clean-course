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
       
    }

    class User {

        public role: string;
        public email: string;
        public lastAccess: Date;
      
 
        constructor ({role, email}:UserProps){
          this.role = role;
          this.email = email;
          this.lastAccess = new Date();
          
        }

        checkCredentials(){
            return true;
        }


    }

    interface SettingsProps{
        lastOpenFolder: string;
        workingDirectory: string;
        
    }

    class Settings{


        public lastOpenFolder: string;
        public workingDirectory: string;

       constructor({lastOpenFolder, workingDirectory}:SettingsProps){
      
        this.lastOpenFolder = lastOpenFolder;
        this.workingDirectory = workingDirectory;
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



    class UserSettings{

        public person: Person;
        public user: User;
        public settings: Settings;

        constructor({
           name, gender, birthDate,role, email, workingDirectory, lastOpenFolder
        }:UserSettingsProps)
        {
            this.person = new Person({name, gender, birthDate});
            this.user = new User({role, email});
            this.settings = new Settings({workingDirectory, lastOpenFolder})
        }
    }


   
    //const newUser = new User('Yuliana', 'M', new Date('1995-12-26'));

    
})()