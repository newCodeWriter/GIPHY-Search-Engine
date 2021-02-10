/* eslint-disable comma-dangle */
/**
 * /* eslint-disable vars-on-top
 *
 * /* eslint-disable prefer-arrow-callback */

/* eslint-disable no-undef */
/* eslint-disable func-names */
/* eslint-disable no-tabs */
/* eslint-disable indent */
/** @format */

// eslint-disable-next-line prefer-arrow-callback
$(function () {
	const yellow = () => {
		const input = 'yellow';
		$('.search-input').focus();
		$('#gif-search').text(input);
		$.ajax({
			url: `https://api.giphy.com/v1/gifs/search?api_key=sL5xWiHQ5a6PSB0LoE6A6t2yovo19jxp&q=${input}&limit=30`,
		}).done((res) => {
			const { data } = res;
			$.each(data, (i, e) => {
				const {
					source,
					title,
					images: { original },
				} = e;
				$('.insert-gifs').append(
					`<a href="${source}" target="_blank" class="source-link"><img src="${original.url}" class="new-img" alt="${title}"/></a>`
				);
				$('#gif-items').text(`${data.length} GIFs`);
			});
		});
	};

	yellow();

	$('.menu-btn').click(() => {
		$('.toggle-menu').toggle();
	});

	$(window).resize(() => {
		if ($(this).width() > 571) {
			$('.toggle-menu').show();
		}
	});

	$('.search-it > .search-btn').on('click', function () {
		const userInput = $(this).siblings().val();
		if (userInput === '') {
			$('.search-it > input').focus();
		} else {
			$('#gif-search').text(userInput);
			// remove gifs from previous search
			$('.source-link').remove();
			$.ajax({
				url: `https://api.giphy.com/v1/gifs/search?api_key=sL5xWiHQ5a6PSB0LoE6A6t2yovo19jxp&q=${userInput}&limit=30`,
			}).done((res) => {
				const { data } = res;
				$.each(data, (i, { source, title, images: { original } }) => {
					$('.insert-gifs').append(
						`<a href="${source}" target="_blank" class="source-link"><img src="${original.url}" class="new-img" alt="${title}"/></a>`
					);
				});
				$('#gif-items').text(`${data.length} GIFs`);
			});
			$(this).siblings().val('');
		}
	});
	// Remove href attribute for gifs with no source
	$('.insert-gifs').on('mouseover mouseenter', () => {
		$('.insert-gifs > a[href=""]').removeAttr('href');
	});
});
