class PhotoSphere {
  constructor(thumbUrl, imageUrl, size, segments) {
      this.mesh = createPhotoSphere(thumbUrl,size,segments);
      this.thumbUrl = thumbUrl;
      this.imageUrl = imageUrl;
  }
}