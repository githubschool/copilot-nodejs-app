// public/scripts.js
$(document).ready(function() {
	$('#add-collaborator-form').on('submit', function(event) {
		event.preventDefault();

		$.ajax({
			type: 'POST',
			url: '/addCollaborator',
			data: $(this).serialize(),
			success: function(response) {
				if (response.message) {
					$('#popup-message .modal-title').text(response.messageType);
					$('#popup-message .modal-body p').text(response.message);
					$('#popup-message').show();
				}
			},
			error: function(error) {
				alert('Error adding collaborator');
			}
		});
	});

	$('#remove-collaborator-form').on('submit', function(event) {
		event.preventDefault();

		$.ajax({
			type: 'POST',
			url: '/removeCollaborator',
			data: $(this).serialize(),
			success: function(response) {
				if (response.message) {
					$('#popup-message .modal-title').text(response.messageType);
					$('#popup-message .modal-body p').text(response.message);
					$('#popup-message').show();
				}
			},
			error: function(error) {
				alert('Error removing collaborator');
			}
		});
	});

	$('#close-popup').on('click', function() {
		$('#popup-message').hide();
	});
});