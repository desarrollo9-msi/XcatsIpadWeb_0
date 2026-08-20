namespace WebCoreXcatsIpad.Models
{
    public class LoginModel
    {
        public string usuario { get; set; }
        public string contraseña { get; set; }
    }
    public class UsuarioModel 
    {
        public int IdUsuario { get; set; }
        public string NombreUsuario { get; set; }
        public string usuario { get; set; }
        public int IdEmpleado { get; set; }
        public int Cia_IdEmp { get; set; }
        //string IUser<string>.Id => IdUsuario.ToString();
        //string IUser<string>.UserName { get => usuario; set => value = usuario; }
    }
}
