using Microsoft.AspNetCore.Mvc;
using WebCoreXcatsIpad.Models;

namespace WebCoreXcatsIpad.Controllers
{
    public class SeguridadController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
        public ActionResult Login(LoginModel modelo)
        {
            int estatus = 0;
            //var objUsuario = servicio.LoginUsuario(ref estatus, modelo.usuario, modelo.contraseña);
            //if (estatus == 1)
            //    Session["usuario"] = objUsuario;

            return Json(new { status = estatus });
        }
    }
}
