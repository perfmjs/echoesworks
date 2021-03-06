describe("Image", function () {
	var section,
		image1, image2, image3,
		slides;

	beforeEach(function () {
		slides = [];

		section = document.createElement('section');
		image1 = document.createElement('img');
		image1.src = "app/background.jpg";
		image1.title = "background";

		image2 = document.createElement('img');
		image2.src = "app/left.jpg";
		image2.title = "left";

		image3 = document.createElement('img');
		image3.src = "app/logo.png";
		image3.title = "right";

		var header = document.createElement('h1');
		header.innerHTML = "HELLO";

		section.appendChild(image1);
		section.appendChild(image2);
		section.appendChild(image3);
		section.appendChild(header);

		document.body.appendChild(section);
	});

	it("should return element", function () {
		spyOn(EchoesWorks.imageHandler, 'removeImages');
		EchoesWorks.imageHandler();
		expect(EchoesWorks.imageHandler.removeImages).toHaveBeenCalled();
	});

	it("should return correctly image", function () {
		EchoesWorks.imageHandler();
		expect(document.getElementsByTagName('img').length).toBe(0);
		expect(document.querySelector('.image-left').style.backgroundImage)
			.toBe('url(http://0.0.0.0:8000/app/left.jpg)');

		expect(document.querySelector('.image-right').style.backgroundImage)
			.toBe('url(http://0.0.0.0:8000/app/logo.png)');
	});

	it("should remove all images", function () {
		var images = document.getElementsByTagName('img');
		expect(images.length).toBe(3);
		EchoesWorks.imageHandler();
		expect(images.length).toBe(0);
	});

	//it("should up h1", function () {
	//	EchoesWorks.imageHandler();
	//	expect(document.getElementsByTagName('section')[0].innerHTML).toBe('HELLO');
	//});
});

