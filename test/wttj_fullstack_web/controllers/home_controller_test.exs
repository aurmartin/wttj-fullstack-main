defmodule WttjFullstackWeb.HomeControllerTest do
  use WttjFullstackWeb.ConnCase

  test "GET /", %{conn: conn} do
    conn = get(conn, "/")
    assert html_response(conn, 200) =~ ~s(id="wttj_fullstack-app")
  end
end
