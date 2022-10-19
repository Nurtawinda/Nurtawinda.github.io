var Nim = username("Masukkan Nim Anda:");
                    var password = password("Masukkan Password Anda:");
            
                    if(Nim == 210210501037){
                        if(password == "w1nday"){
                            document.write("<h2> Hai Winda!</h2>");
                        }else{
                            document.write("<h6>Password salah, silahkan masukkan password yang benar!</h6>");
                        }
                    }else{
                        document.write("<h6> Anda bukan Member</h6>")
                    }