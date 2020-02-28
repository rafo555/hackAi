import React, { memo } from 'react';

const ZipDownload = () => {

    const save = () => {
        const JSZip = require("jszip");
        const zip = new JSZip();
        zip.file("Hello.txt", "Hello World\n");
        const img = zip.folder("images");
        const imgData = '/9j/4AAQSkZJRgABAQEASABIAAD/2wBDAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT' +
            '0tMTU3Ojo6Iys/RD84QzQ5Ojf/2wBDAQoKCg0MDRoPDxo3JR8lNzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3' +
            'Nzc3Nzc3Nzf/wAARCABkAGQDAREAAhEBAxEB/8QAGwAAAgMBAQEAAAAAAAAAAAAAAAUBBAYDAgf/xAA9EAABBAEBBAYGCAQHAAAAAAABAAI' +
            'DBBEFBhIhMRNBUVJTkRYiYXGh0RQyNXOSscHCI4GC4QcVJDRDY/H/xAAaAQEAAwEBAQAAAAAAAAAAAAAAAwQFBgIB/8QANhEAAgEDAQMJBQ' +
            'gDAAAAAAAAAAECAwQRBRIhMRQVMkFRUmGh0RMicXLBIzM0QkOBsfBTgpH/2gAMAwEAAhEDEQA/APuKAhy+MGYn2guxTyR9HB6ryOIPUfeue' +
            'qarcQnKOFufiW428Ws5OfpJd8OD8J+a8c8XHdXn6n3k0e0PSS74cH4T8054uO6vP1HJo9oekl3w4Pwn5pzxcd1efqOTR7Q9JLvhwfhPzTni' +
            '47q8/Ucnj2h6SXe5X8j8054uO6vP1HJoh6SXe5X8j8054uO6vP1HJo9oekl3w6/4T8054uOxefqOTx7Rzol6a/C+SYMG6/dG4D2LV0+5qXM' +
            'HKeFh9RBVgoPCGa0CIEAICHckBh9VbuanZH/YT58Vx14tm4mvE0aTzBFRVj2CAEAzpxsdWYXMaSc8SFDJvaPSwd+hj8NnkF5z4nrAdFH4bf' +
            'IJnxGCrfYxkI3WgEu6gvUG2zzJDzZhu7p2e9I4/ous0hYt8+LKFw/fHC1CAEAICCgMbtA3d1Wb24PwXKaksXUv2L9HoIXKgSgUYNA2hVNES' +
            'GBm/wBFnPtxldMrK3dvtOCzs58il7SW3jJOzsUc0eJWBwDcjPvWPpVClXrSjUjlYLFxKUYrDHX0Gr4I8yt7m207iKntp9pBo1vCHmU5ttO' +
            '4h7afaZvXwxk3RsGGh3AfyXM3UIQuZxgsJeheptummx5s+3d0qD25PxXS6asW0SlW6bGSvkQIAQAgMltO3Gpg96MHyyuY1ZYuU/BfyXbd+5' +
            'gULMJwR8Aaln2aPuf2rsI/hf8AX6Gf+octl/qf0fqsLRPv5fL6Fm66KLepzzRTMEcjmgt6lNq1zWo1YqnJrcfLenGUXlFP6XZ8d/mslajd' +
            'f5H/AH9if2FPsFWrPLpGFx3nHJJKiU5TblJ5bPTSSSRqdIbuadVbj/jC7KyWLeC8EZtTpsuq0eAQAgBAZjaxuLUDu1hHx/uue1lYqQfh9S3' +
            'bcGIljFkEfAGpZ9mj7n9q7CP4VfL9DP8A1Dlsx9T+j9VhaJ9/L5fQs3XRRfv05bMzXMLQA3HEq5qWn1bqrGUMYS6yOhWjTTTOI0p/DelaPc' +
            'FUjoVR9Kf98iR3S6kZ3VOE+Oe61ZCWzksZzg2dVu5Xib2MA+C7ijHZpxXgZcuLOylPgIAQAgM9tazhWf2Fw/I/osPWl0JfEs23FmcWCWwKP' +
            'gDUs+zR9z+1dhH8Kvl+hn/qFfZ2WOGLekcGgtwM+9c7pVenQqylUeFgt3EXKKSGj9Tgby3ne4LVnrNtF7sv9iCNtUZYim6auJQMAgnBV2hc' +
            'KtQVVLGSKUNmWyzF3B0lvd6zgef/AKuNpx21jt9TRbwboBd3gyyV9AIAQAgEm1Tc0o3d2QfEFZGsL7FPxLFs/eFWjVobDZxMwOwRgnmFT0u' +
            '3pV4zVSOcYJK03FrBZm0OJ2ehlezPe4hWquj05b4SaI1cSXEvOaY6RYTndixke5aLi4W7i+qP0Ik8zyLNKhknrsbGMkcT5ri6VvVrz2aayz' +
            'SlOMFmTGkelyHHSSBo9gytWlodR75yS+G8ryul+VF4xiCm6NpJDWHitr2St7VwT4Jlba26mTIsHSatG3tlaFy1ms1Ka8UXqnRZtwu2M0lAC' +
            'AEAIBVtI3e0t57rmn4rN1WObZ+GCag8TMrBYmrnMLywnnjkVzlGvVovMHguShGS3l+HW5246aNkntHArSp6xVj04p+RC7eL4bi2dXrTQvY7' +
            'ejc5pADhzOO1XedKFSnKPB4f8EfsZRkmTs/MyCHelOBu4+Kx9MuKdvVlKo8LBYrwlOKSGEmqsHCKMn2k4V+rrsFupxz8dxFG1b6TKs16eVp' +
            'aSGtPUAsyvqlxWTjlJMnhbxi8inTG9JrUX3pPlletPjtXEEeaz91mzHJdgZ5KAEAIAQFDW4zJplhrRk7uQAOwqnfwc7aaRJSeJoxZ5ngfcu' +
            'RND4EICUA0pf7VnUOP5qCfSPaPb7EMf1njPYvmyz7kryagwZDGE+08AvapnzJ02eY5+qMeGndAcSccM4WrpcW7lPsyVq79w2C6ooggBACAE' +
            'BGF8wDhYp1rA/jQsf7SOPmoqtvSqr34pnqMpR4MVz7O1X5ML3xE+3eHxWdV0ijLfBtEquJLiLbGz9yLJiLJQO6cH4qhV0mvDfHeTRuIvicY' +
            'tK1GXDBC9gHfOAq0NOuZvoY+J7daC6y/X2bdzszgdrYx+pWhS0Z4zUl/z1IpXK6kM62i0IeIgEjh1yHe/stGlp1vT/Ll+JBKrN9YwaxrRhr' +
            'QB2DgrqiorCRHnJ6X0AgBACAEAm2t1SxougXdSrRRSvrR9J0cpIDh1jIQFn/NKkNiKnauV23JBgRB3FxxkgDny445oDzDrulTx15IdQrvZ' +
            'Ye6OFzXjEjm5yAesjB8j2ICnq20tGro+oahUmiuCiwGVkb/AKucYLiOQwc57AUBYoW7AZPNekqGoGtfFahfhj2kcSQScYPXnBBCAl+0WjMg' +
            'Ez9TqsjLntDnSAeswZcOPWBxKA4N2josmtus3aMdOFsJbMLIJPSAkbzcernhjjxQHm9tVo1ShZu/TYpo60zIZWwuDnNe4gAEdXPPuBQDuGV' +
            'k0bZInBzHDLSOsID2gBACAEBnP8QGPsbK3qULS+e20QQsHEue4gAfmT7AUAq1fStbta4yZlOF1avqkFuIxzNjD4w3dcXDGXSDtPDGAEBdq6' +
            'Dbq3tX6MQOqyGSWhHLlzWyyt/ibw7uR5PcgKOk0dfqWbduXTonyz0a0TopLDCC6N7t9gAGGgtcd3qHWgOT9mL1aO5NolZlSv8AS61qDS5JQ' +
            'GOdG4mQcCWsDvVwBwy3J5oBpqNfUtStaHZl0trBWuGaaN07HFjejc0E9Rdl3V1DmgE+2dO3BV2nuOq/6aevUZC4Pb6xjk4jGeH1hjKAua7' +
            'oN7Um6rqEFZsVuxDXijrGVoLxFL0h3nDhk8QOYGOfFAbGBznxsc9hY4jJYSDu/wAwgOqAEAIAQEFoPNAGAgDAQBuhAG6EAYCArX6FTUK5r3' +
            'a7J4SQTG8ZaSOI4IDuyNrGta0YAGAgPQACAlACA//Z';
        img.file("smile.gif", imgData, {base64: true});
        img.file("smile2.jpg", imgData, {base64: true});
        zip.generateAsync({type:"blob"})
            .then(function(content) {
                const FileSaver = require('file-saver');
                FileSaver.saveAs(content, "exampleTest.zip");
            });
    };
    return (
        <div>
            Download
            <input type="button" value="Save" onClick={save}>
            </input>
        </div>
    );
}

export default memo(ZipDownload);