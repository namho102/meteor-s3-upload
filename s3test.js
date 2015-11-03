if (Meteor.isClient) {
    Template.basic.events({
        "click button.upload": function() {
            var files = $("input.file_bag")[0].files

            S3.upload({
                files: files,
                path: "meteor-upload"
            }, function(e, r) {
                console.log(r);
            });
        }
    })

    Template.basic.helpers({
        "files": function() {
            return S3.collection.find();
        }
    })
}

if (Meteor.isServer) {
    S3.config = {
        key:"AWSAccessKeyId",
        secret:"AWSSecretAccessKey",
        bucket:"YOUR BUCKET",
        region: "YOUR REGION" //!important
    };
}