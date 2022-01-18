/**
 * Screens listener passes requests to/from ScreensService and handles jquery-stuff on a Screens page
 */

const screensData = new ScreensService(settings, log);

$(function () {
  function buildScreensList() {
    let sortedScreenIds = [];
    for (const key in screensData.screens) {
      sortedScreenIds[sortedScreenIds.length] = key;
    }
    sortedScreenIds.sort();

    sortedScreenIds.forEach( (screenId) => {
      const screen = screensData.get(screenId);

      // let screen_record = '<tr>';
      // screen_record += '<td>' + screen.number.toString() + '</td>';
      // screen_record += '<td>' + JSON.stringify(screen.actions) + '</td>';
      // screen_record += '</tr>';

      let screen_record = '<a href="#" class="list-group-item" x-data-screen-id="' + screen.number.toLocaleString() + '">';
      screen_record += '<div class="row">';
      screen_record +=    '<div class="col-xs-1">' + screen.number.toString() + '</div>';
      screen_record +=    '<div class="col-xs-10">' + JSON.stringify(screen.actions) + '</div>';
      screen_record += '</div>';
      screen_record += '</a>';

      // $("#screens-table-body").append(screen_record);
      $("#screens-page-screens-list").append(screen_record);
    });

    $(".list-group-item").on('click', function() {
      const screenId = $(this).attr("x-data-screen-id");
      atm.display.setScreenByNumber(screenId);
      $("#atm-button-menu").click();
    });
  }

  buildScreensList();
});
