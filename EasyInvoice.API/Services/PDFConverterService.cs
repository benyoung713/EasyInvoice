using DinkToPdf;
using DinkToPdf.Contracts;
using System.IO;

namespace EasyInvoice.API.Services
{
    public class PDFConverterService
    {
        private readonly IConverter _convertor;

        public PDFConverterService(IConverter convertor)
        {
            _convertor = convertor;
        }

        public byte[] ConvertToPdf()
        {
            var globalSettings = new GlobalSettings
            {
                ColorMode = ColorMode.Color,
                Orientation = Orientation.Portrait,
                PaperSize = PaperKind.A4,
                Margins = new MarginSettings { Top = 10 },
                DocumentTitle = "PDF Invoice"
            };

            var objectSettings = new ObjectSettings
            {
                PagesCount = true,
                HtmlContent = "",
                WebSettings = { DefaultEncoding = "utf-8", UserStyleSheet = Path.Combine(Directory.GetCurrentDirectory(), "assets", "styles.css") },
                HeaderSettings = { FontName = "Arial", FontSize = 9, Right = "Page [page] of [toPage]", Line = true },
                FooterSettings = { FontName = "Arial", FontSize = 9, Line = true, Center = "Report Footer" }
            };

            var doc = new HtmlToPdfDocument()
            {
                GlobalSettings = globalSettings,
                Objects = { objectSettings }
            };

            return _convertor.Convert(doc);
        }
    }
}
