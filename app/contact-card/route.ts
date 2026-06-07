export async function GET() {
    const vcfData = [
        "BEGIN:VCARD",
        "VERSION:3.0",
        "FN:Nino D Studio",
        "ORG:Nino D by Nino Devdariani",
        "EMAIL;TYPE=WORK,PREF:studio@ninod.space",
        "TEL;TYPE=CELL:+995574406061",
        "URL:https://ninod.space",
        "NOTE:Paintings that leave the wall.",
        "END:VCARD",
    ].join("\r\n");

    return new Response(vcfData, {
        headers: {
            "Content-Type": "text/vcard; charset=utf-8",
            "Content-Disposition": 'inline; filename="ninod_studio.vcf"', // აუცილებლად inline
        },
    });
}